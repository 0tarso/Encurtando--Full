require('dotenv').config()
import axios from "axios";

//BASE_URL_API pode ser o localhost
//na porta em que você escolher no projeto backend

const BASE_URL = process.env.BASE_URL_API
const api = axios.create({
    baseURL: BASE_URL
})


export const createShortURL = async (originalURL) => {
    try {
        const response = await api.post(`${BASE_URL}/links`, { urlToEncode: originalURL })

        return response.data

    } catch (error) {
        const errorMessage = error.response.data
        throw errorMessage
    }

}