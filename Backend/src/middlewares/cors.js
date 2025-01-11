require("dotenv").config()
const allowedOrigins = process.env.ALLOWED_ORIGINS;

const configCors = {
    origin: (origin, callback) => {

        console.log('Origem da requisição ->> ', origin)

        if ((origin && allowedOrigins.includes(origin))) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

module.exports = configCors