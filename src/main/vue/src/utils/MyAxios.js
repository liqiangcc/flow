import axios from 'axios';
import * as Configs from '../configs/BaseConfigs';
import {Message} from 'iview';
import {MessageBus} from '../utils/MessageBus';

axios.defaults.timeout = 100000;
axios.defaults.baseURL = Configs.serverUrl;
let checkAxios = 0;

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/json;charset=UTF-8'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response)
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function toGet(url, params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params: params
        })
            .then(response => {
                if(response.status === 200)
                {
                    resolve(response.data);
                }
                else
                {
                    resolve("ERROR");
                }
            })
            .catch(err => {
                Message.error({
                    content: '操作出错：' + err.data,
                    duration: 3
                });
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function toPost(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                if(response.status === 200)
                {
                    resolve(response.data);
                }
                else
                {
                    resolve("ERROR");
                }
            },err => {
                Message.error({
                    content: '操作出错：' + err.data,
                    duration: 3
                });
            })
    })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function toDel(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.delete(url,data)
            .then(response => {
                if(response.status === 200)
                {
                    resolve(response.data);
                }
                else
                {
                    resolve("ERROR");
                }
            },err => {
                Message.error({
                    content: '操作出错：' + err.data,
                    duration: 3
                });
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function toPut(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data)
            .then(response => {
                if(response.status === 200)
                {
                    resolve(response.data);
                }
                else
                {
                    resolve("ERROR");
                }
            },err => {
                Message.error(
                    {
                        content: '操作出错：' + err.data,
                        duration: 3
                    });
                reject(err)
            })
    })
}