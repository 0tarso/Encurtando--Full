const rateLimit = require('express-rate-limit')


//Caso for usado, você pode configurar a função abaixo
const limiter = rateLimit({
    windowMs: xxxx,
    max: xxxx,
    message: xxxxxx,
    headers: true
})

module.exports = limiter