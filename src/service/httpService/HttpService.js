import axios from 'axios';

export const get= async(url,params)=>{
        const data= await axios.get(process.env.base_url + url,{params: params})
        // console.log(data);
        return data;
}






