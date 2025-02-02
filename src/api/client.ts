import axios from 'axios'

// Creamos una instancia de Axios con una configuración predefinida
export const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

//interceptor para sacar data del objeto que la contiene , para su futuro uso
client.interceptors.response.use((response) => response.data)

// configura el header de autorización en la instancia de Axios (client)
// para que todas las futuras peticiones incluyan el token de autenticación.
export const setAuthHeader = (accessToken: string) => {
    client.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}

export const removeAuthHeader = () => {
    delete client.defaults.headers['Authorization']
}
