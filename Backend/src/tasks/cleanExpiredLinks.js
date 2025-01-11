const { db } = require("../firebase/config")
const { Timestamp, query, getDocs, writeBatch, collection, where } = require("firebase/firestore")

/** Faz a busca no database/firestore por links que tenham o campo "expiresAt" <= a data atual, e caso encontre, faz a exclusão desses links do DB*/

async function cleanExpiredLinks() {
    console.log("Iniciando cleanExpiredLinks")
    const now = Timestamp.now()
    const linksCollection = collection(db, "links")

    try {
        const expiredDocs = query(linksCollection, where("expiresAt", "<=", now))

        const snapshot = await getDocs(expiredDocs)

        if (snapshot.empty) {
            console.log(`Nenhum link expirado encontrado \n`)
            return
        }

        snapshot.forEach((doc) => {
            console.log('__________________________________')
            console.log('Deletando link expirado: ')
            console.log(`Original: ${doc.data().originalURL} -->> Short: ${doc.data().shortURL}`)
            console.log(`${doc.data().expiresAt.toDate()}`)
        })

        const batch = writeBatch(db)

        snapshot.forEach((doc) => {
            batch.delete(doc.ref)
        })

        await batch.commit()

        console.log(`===========================================================`)
        console.log(`${snapshot.size} links expirados e deletados com sucesso! \n`)
    }

    catch (error) {
        console.log(`Erro ao deletar arquivos expirados \n`)
        console.log(`${error}`)
        console.log(`${error.message}`)
    }
}

module.exports = cleanExpiredLinks