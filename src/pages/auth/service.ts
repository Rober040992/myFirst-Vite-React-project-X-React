import { client, setAuthHeader } from "../../api/client"
import type { Credentials, Login } from "./types"

export const login = async (credentials: Credentials) => {
    const response = await client.post<Login>('/auth/login', credentials)
    console.log("log desde service.ts para ver el:", response.data,"desde response.data")
    const { accessToken } = response.data;
    setAuthHeader(accessToken)
}
