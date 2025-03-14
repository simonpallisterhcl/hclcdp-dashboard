import "server-only"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { SessionData } from "@/types/session"

const createSession = async (token: string): Promise<void> => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies()

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}

const deleteSession = async (): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.delete("token")
}

const getToken = async (): Promise<string> => {
  const cookieStore = await cookies()
  console.log("getting token")
  return cookieStore?.get("token")?.value ?? ""
}

export const getCampaignId = async (token: string): Promise<string> => {
  const headers = { Cookie: `_lemapp=${token}`, Accept: "application/json" }
  const response = await fetch(`${process.env.API_BACKEND}/app/login`, { headers })
  const { campaignId } = await response.json()
  return campaignId
}

const verifySession = async (): Promise<SessionData> => {
  const token = (await cookies()).get("token")?.value
  console.log("verifying", token)
  if (!token) {
    console.log("No session found, redirecting to login page.")
    redirect("/login")
  }

  console.log("token", token)
  const headers = { Cookie: `_lemapp=${token}`, Accept: "application/json" }
  const response = await fetch(`${process.env.API_BACKEND}/app/login`, { headers })
  // if (response.status === 401 || response.status === 500) {
  //   console.log("Session expired, deleting session.")
  //   await deleteSession()
  // }

  console.log(response.status)

  const { campaignId } = await response.json()
  console.log("campaignId: ", campaignId)

  const userResponse = await fetch(`${process.env.API_ENDPOINT}/-/v1/users`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const { data } = await userResponse.json()
  console.log("data", data)

  return { token, campaignId, currentUser: { ...data[0] } }
}

export { createSession, deleteSession, verifySession, getToken }
