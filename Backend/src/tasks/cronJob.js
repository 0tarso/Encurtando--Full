const cron = require("node-cron")
const cleanExpiredLinks = require("./cleanExpiredLinks")

/** CronJob configurado para agir diariamente na exclusão de links expirados*/
function startCronJobs() {
    cron.schedule('1 0 * * *', () => {
        console.log(`======`)
        console.log(`------>>>>>> Cron job rodando`)
        console.log(`------>>>>>> Buscando por links expirados`)
        cleanExpiredLinks()
    })
}

module.exports = startCronJobs