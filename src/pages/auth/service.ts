import { client, removeAuthHeader, setAuthHeader } from '../../api/client'
import storage from '../../utils/storage'
import type { Credentials, Login } from './types'

// Funciones para manejar la autenticación: iniciar sesión, 
// guardar el token en localStorage, configurar headers y cerrar sesión
export const login = async (credentials: Credentials) => {
    const response: Login = await client.post('/auth/login', credentials)
    console.log(
        'log desde service.ts para ver el:',
        response,
        'desde response.data'
    )
    const { accessToken } = response
    storage.set("auth", accessToken)
    setAuthHeader(accessToken)
}

export const logout = async () => {
    storage.remove("auth")
    removeAuthHeader()
}
