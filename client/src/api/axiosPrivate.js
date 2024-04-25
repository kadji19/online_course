import axios from 'axios'


const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})

axiosPrivate.interceptors.request.use((request)=>{ 
    request.headers['authorization'] =`BEARER ${localStorage?.getItem('token')}`
if (!request.headers['authorization']) {
}
return request

},error=>Promise.reject(error))

export default axiosPrivate