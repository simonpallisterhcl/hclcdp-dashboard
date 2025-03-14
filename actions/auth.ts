"use server"
import { createSession, deleteSession } from "@/lib/session"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const getToken = async (FormData: FormData) => {
  "use server"

  const urlEncodedPayload = new URLSearchParams()
  urlEncodedPayload.append("username", FormData.get("username"))
  urlEncodedPayload.append("password", await sha256(FormData.get("password")))
  urlEncodedPayload.append("grant_type", "password")
  urlEncodedPayload.append("client_id", "client_id")
  urlEncodedPayload.append("client_secret", "client_secret")

  console.log(urlEncodedPayload.toString())

  const response = await fetch(`${process.env.API_ENDPOINT}/oauth2/token`, {
    method: "POST",
    body: urlEncodedPayload.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })

  revalidatePath("/login")

  if (response.status === 200) {
    const data = await response.json()
    createSession(data?.access_token)
    redirect("/cdp/dashboard")
  } else {
    const data = await response.json()
    console.log(`Error: ${data?.error_description || "Unknown Error"}`)
  }
}

const logout = async () => {
  deleteSession()
  redirect("/login")
}

const sha256 = async (password: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("")
  return hashHex
}

export { getToken, logout }
