import axios from 'axios';

// i need to restart ngrok every 8 hours to get access to the ngrok server
export default axios.create({
    baseURL: 'http://adea08d6.ngrok.io'
})