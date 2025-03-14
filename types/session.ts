export interface SessionData {
  campaignId: number | null
  token: string | null
  currentUser: User
}

export interface User {
  id?: number
  email?: string | null
  firstName: string | null
  lastName: string | null
  timeZone?: string | null
  language?: string | null
}
