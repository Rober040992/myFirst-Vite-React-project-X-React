//  Utilidad para manejar localStorage: 
// obtener, guardar, eliminar y limpiar datos (en el localStorage)

type Key = "auth"

const storage = {
    get(key: Key){
        const value = localStorage.getItem(key)
        if (!value) {
            return null
        }
        return JSON.parse(value)
    },
    set(key:Key, value:string) {
        localStorage.setItem(key, value)
    },
    remove(key: Key){
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}

export default storage