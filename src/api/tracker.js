import axios from 'axios';
import { AsyncStorage } from 'react-native';
// i need to restart ngrok every 8 hours to get access to the ngrok server



// export default axios.create({
//     baseURL: 'http://e664c969.ngrok.io'
// });



const instance = axios.create({
    baseURL: 'http://e664c969.ngrok.io'
})


instance.interceptors.request.use( 
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            console.log(config);
            
        }
        return config;
    },
    (err) => {
        console.log(err);
        
        return Promise.reject(err);
    }
);

console.log('instance :',instance.interceptors);

export default instance;