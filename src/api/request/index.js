import axios from "axios";
import {BASEURL,TIMEOUT} from './config';

class HYRequest{
    constructor(baseUrl,timeout){
        this.instance = axios.create({
            baseURL,
            timeout,
        })

        this.instance.interceptors.response.use(res => {
            return res.data;
        })
    }

    request(config) {
        return this.instance.request(config);
    }

    get(config) {
        return this.request({...config, method: 'get'});
    }

    post(config) {
        return this.request({...config, method: 'post'});
    }
}

export default new HYRequest(BASEURL,TIMEOUT);