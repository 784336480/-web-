import axios from 'axios';

var http = axios.create({
    timeout:6000
})

// //------------------- 一、请求拦截器
// http.interceptors.request.use(function (config) {
//
//     // vm.$store.dispatch('startLoading')
//     // 给头添加token
//     if (localStorage.getItem('currentUser_token')){//存在token,加入头
//
//         config.headers.Authorization=localStorage.getItem('currentUser_token')
//         config.headers.userId = localStorage.getItem('currentUser_auid')
//     }else{
//         //不存在,滚去登录
//         // vm.$router.push('login');
//     }
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });
//
// //----------------- 二、响应拦截器
// http.interceptors.response.use(function (response) {
//
//     // 1. 出错处理
//     if(response.data.code==2000){
//         // 1.1 更新token
//         if(response.data.token){
//             localStorage.setItem('token',response.data.token)
//         }
//     }else{
//         Message.error('状态码：'+response.data.code+'    错误信息：'+ response.data.desc)
//     }
//     return response.data;
// }, function (error) {
//     // 对响应错误做点什么
//     let {status,statusText}=error.response;
//     Message.error('状态码：'+status+'    错误信息：'+ statusText)
//     return Promise.reject(error);
// });
//





export default function (method,url,data = null) {
    method = method.toLowerCase();
    if (method == 'get') {
        return http.get(url, { params: data })
    } else if (method == 'post') {
        return http.post(url, data)
    } else if (method == 'delete') {
        return http.delete(url, { params: data })
    }else if(method == 'put'){
        return http.put(url,data)
    }else{
        console.error('未知的method'+method)
        return false
    }
}
