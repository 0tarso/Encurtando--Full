/** Gera um id aleatório com o número de caracteres especificado no parâmetro
 * @param {number} strSize - Número de caracteres do id aleatório
 * @returns {String} - retorna uma string aleatória com o número de caracteres especificado no parâmetro
 */

async function generateId(strSize) {

    const { nanoid } = await import('nanoid')
    return nanoid(strSize)
}

module.exports = generateId