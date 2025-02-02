import { client, setAuthHeader } from '../../api/client'
import type { Credentials, Login } from './types'

export const login = async (credentials: Credentials) => {
    const response: Login = await client.post('/auth/login', credentials)
    console.log(
        'log desde service.ts para ver el:',
        response,
        'desde response.data'
    )
    const { accessToken } = response
    setAuthHeader(accessToken)
}
