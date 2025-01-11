const firebase = require("../firebase/functions");

const linksController = {

    //GET /links - retorna todos os links armazenados - somente para consulta
    index: async function (req, res) {
        const links = await firebase.getLinks()
        return res.json(links)
    },

    //POST /links - Faz a criação de um novo link no banco de dados
    create: async function (req, res) {
        const { urlToEncode } = req.body

        const regexURL = /^((https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?)$/;

        if (regexURL.test(urlToEncode)) {
            const result = await firebase.createShortURL(urlToEncode)
            return res.status(201).json(result)

        }
        else {
            return res.status(400).json({ message: "URL inválida" })
        }
    },

    //GET /:shortURL - Faz a busca por uma URL já encurtada e devolve o link original para o redirecionamento
    show: async function (req, res) {
        const { shortURL } = req.params
        const originalURL = await firebase.showShortURL(shortURL)

        if (!originalURL) {
            return res.status(404).json({ message: "Link não encontrado" })
        }

        return res.json(originalURL.linkToRedirect)
    }
}


module.exports = linksController