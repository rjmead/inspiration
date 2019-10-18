import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 43891fb76d029610370e67634c0f0700cb3b157ca00ab4d6b77681a9cb68fd9c'
    }
})