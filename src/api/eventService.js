//here we are importing our Axios dependency
import axios from 'axios'

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3001/api/v1',
    headers: {
        "Content-Type": "application/json",
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1NjgwNTE5MywiZXhwIjoxNTU3NDA5OTkzfQ.DPVI2MGk8kq53_OCyHQIegzNfKxF4pe2M9RnuDwGv9s"
    }
})

//Now set up the routes.  We are going to export a default object with keys that keep our API routes organized.  For example, all of the auth routes live in the Auth object

export default {
    auth: {
        userLogin(payload) {
            return apiClient.post('/auth/login/', payload)
        },
        userAliveAndActive() {
            return apiClient.post('/auth/check/')
        },
        userLogout() {
            return apiClient.post('/auth/logout/')
        },
        generateResetToken(payload) {
            return apiClient.post('/auth/generate_reset_token/', payload)
        },
        resetPassword(payload) {
            return apiClient.post('/auth/reset_password/', payload)
        }
    },
    articulo: {
        crearArticulo(payload){
            return apiClient.post('/articulo',payload)
        }
    },
    listaprecio: {
        getCurrent(){
            return apiClient.get('/listaprecio/current')
        }
    },
    categoria: {
        getCategorias(){
            return apiClient.get('/categoria')
        }
    },
    genero: {
        getGeneros(){
            return apiClient.get('/genero')
        }
    },
    fabricante: {
        getFabricantes(){
            return apiClient.get('/fabricante')
        }
    }
}