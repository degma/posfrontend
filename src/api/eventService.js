//here we are importing our Axios dependency
import axios from 'axios'

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3001/api/v1',
    headers: {
        "Content-Type": "application/json",
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU1ODk5MzAzOCwiZXhwIjoxNTU5NTk3ODM4fQ.daBn-CnOQTmSNcbuqol8jurumX_1wsiGs60CwlH6dro"
    }
})

//Now set up the routes.  We are going to export a default object with keys that keep our API routes organized.  For example, all of the auth routes live in the Auth object

export default {
    auth: {
        userLogin(payload) {
            return apiClient.post('/usuario/login/', payload)
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
        crearArticulo(payload) {
            return apiClient.post('/articulo', payload)
        },
        getArticulo() {
            return apiClient.get('/articulo/')
        },
        desactivarArticulo(id) {
            return apiClient.delete('/articulo/' + id)
        },
        editar(payload) {
            return apiClient.put('/articulo', payload)
        }
    },
    listaprecio: {
        getCurrent() {
            return apiClient.get('/listaprecio/current')
        },
        getAll() {
            return apiClient.get('/listaprecio/')
        },
        crearListaPrecio(payload){
            return apiClient.post('/listaprecio/',payload)
        },
        editar(payload){
            return apiClient.put('/listaprecio/'+payload.id, payload)
        },
        eliminar(payload){
            return apiClient.delete('/listaprecio/'+payload.id)
        }
    },
    categoria: {
        getCategorias() {
            return apiClient.get('/categoria')
        },
        crearCategoria(payload) {
            return apiClient.post('/categoria',payload)
        },
        editar(payload){
            return apiClient.put('/categoria/'+payload.id, payload)
        }
    },
    genero: {
        getGeneros() {
            return apiClient.get('/genero')
        },
        editar(payload) {
            return apiClient.put('/genero/' + payload.id, payload)
        },
        crearGenero(payload) {
            return apiClient.post('/genero/', payload)
        }
    },
    fabricante: {
        getFabricantes() {
            return apiClient.get('/fabricante')
        },
        crearFabricante(payload) {
            return apiClient.post('/fabricante', payload)
        },
        editar(payload) {
            return apiClient.put('/fabricante/' + payload.id, payload)
        },
        desactivarFabricante(id) {
            return apiClient.delete('/articulo/' + id)
        }
    }
}