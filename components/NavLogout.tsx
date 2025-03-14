"use client"
import { LogOut } from "lucide-react"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import { logout } from "@/actions/auth"

const handleLogout = () => {
  logout()
}

const NavLogout = () => {
  return (
    <DropdownMenuItem
      onClick={() => {
        handleLogout()
      }}>
      <LogOut />
      Log Out
    </DropdownMenuItem>
  )
}

export default NavLogout
