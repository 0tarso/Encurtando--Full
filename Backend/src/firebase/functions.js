//Firebase imports
const { db } = require("./config")
const { collection, getDocs, getDoc, doc, setDoc, Timestamp } = require("firebase/firestore")

//Gerador de id
const generateId = require("../utils/generateId")

const linksCollection = collection(db, "links")

const firebase = {

    /**
    * Obtém todos os links armazenados.
    * @returns {Promise<Array<{originalURL: string, createdAt: number}>>} - Lista de links com URL original e timestamp.
    */
    getLinks: async function () {

        let resultLinks = []
        try {
            const result = await getDocs(linksCollection)

            if (result.size === 0) {
                return { message: "Links not found" }
            }

            result.forEach((doc) => {
                let link = {
                    shortURL: doc.data().shortURL,
                    originalURL: doc.data().originalURL,
                    createdAt: doc.data().createdAt.toDate().getTime()
                }
                resultLinks.push(link)
            })

            return resultLinks

        } catch (error) {
            console.log(error)
            return { message: error }
        }
    },


    /** Cria uma url encurtada e armazena no database/firestore
   * @param {string} urlToEncode - URL a que irá ser encurtada
   * @returns {Promise<{shortLink: string, completeLink: string}>} - 
   * Retorna o link encurtado e o link original       
   */
    createShortURL: async function (urlToEncode) {
        const uniqueId = await generateId(6)
        const expiresAt = Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));
        const newShortLink = {
            shortURL: uniqueId,
            originalURL: urlToEncode,
            createdAt: Timestamp.now(),
            expiresAt: expiresAt
        }

        let response

        try {
            const linkDocRef = doc(db, "links", uniqueId)
            await setDoc(linkDocRef, newShortLink)

            response = {
                shortLink: uniqueId,
                completeLink: urlToEncode
            }

        } catch (error) {
            console.error(error)
            return { message: error }
        }

        return response
    },


    /** Faz a busca no database/firestore por uma url que tenha a shortURL igual a passada no parâmetro
  * @param {string} shortURL - URL encurtada
  * @returns {Promise<{linkToRedirect: string}>} - Retorna o link original para redirecionamento       
  */
    showShortURL: async function (shortURL) {
        const docRef = doc(db, "links", shortURL)
        const result = await getDoc(docRef)

        if (result.exists()) {
            const regex = /^https?:\/\//i
            const originalURL = result.data().originalURL
            let data

            if (regex.test(originalURL)) {
                data = {
                    linkToRedirect: originalURL
                }
            }
            else {
                let validURL = `http://${originalURL}`
                data = {
                    linkToRedirect: validURL
                }
            }
            return data
        }
        else {
            return
        }
    }
}


module.exports = firebase