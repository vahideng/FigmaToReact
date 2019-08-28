

import axios from 'axios'

require('dotenv').config()

 const instance = axios.create({
    baseURL: `https://api.figma.com`,
    headers : {
        'X-Figma-Token': `${process.env.REACT_APP_FIGMA_TOKEN}`
    },
    withCredentials: true
});

export default instance
