import axios from 'axios'

axios.defaults.baseURL = 'https://run.mocky.io/v3/571e3cdb-61d0-4c49-970f-7f618c468aa3'

const get=(url,config)=>{
    return axios.get(url,config)
}

const http = {
    get
}

export default http