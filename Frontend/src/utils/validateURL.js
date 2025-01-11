export const validateURL = (url) => {
    const regexURL = /^((https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?)$/;

    if (regexURL.test(url)) {
        return url
    }
    return
}