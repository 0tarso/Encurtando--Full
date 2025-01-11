import "./Form.css"
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import QRcode from '../QRcode/QRcode'
import { validateURL } from '../../utils/validateURL'
import { createShortURL } from '../../services/api'

const Form = () => {

    const [formInput, setFormInput] = useState('')
    const [msgSubmitBtn, setMsgSubmitBtn] = useState("Encurtar!")

    const [loadingResult, setLoadingResult] = useState(false)
    const [loadingMsg, setLoadingMsg] = useState("")
    const [showResult, setShowResult] = useState(false)

    const [btnQRcode, setBtnQRcode] = useState(false)
    const [showQRcode, setShowQRcode] = useState(false)

    const [shortURL, setShortURL] = useState('')

    const handleWriting = () => {
        let messages = [
            "Contatando os astros...",
            "Buscando respostas...",
            "Verificando combinações...",
            "ET's existem?",
            "Servidores lotados hein!",
            "Um serviço gratuito...",
            "no máximo 50seg :)",
            "Prometemos!"]
        let writingText = ""

        for (let i = 0; i < messages.length; i++) {
            setTimeout(() => {
                writingText = messages[i]
                setLoadingMsg(writingText)
            }, i * 2000)
        };
    }

    useEffect(() => {
        if (loadingResult) {
            handleWriting()
        }

    }, [loadingResult])

    const handleInput = (e) => {
        setFormInput(e.target.value)
    }

    const handleCopyToClipboard = (e) => {
        const link = e.target.innerHTML
        navigator.clipboard.writeText(link)
        toast.success("Link copiado!")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowResult(false)
        setShowQRcode(false)

        if (formInput === "") {
            setMsgSubmitBtn("Digite um link!")
            setTimeout(() => {
                setMsgSubmitBtn("Encurtar")
            }, 2000)
            return
        }

        const url = validateURL(formInput)
        if (!url) {
            setMsgSubmitBtn("URL inválida")
            setTimeout(() => {
                setMsgSubmitBtn("Encurtar")
            }, 2000)
            return
        }

        setLoadingResult(true)
        try {
            const data = await createShortURL(formInput)
            if (data.shortLink) {
                let formatedShortLink = `encurtando.com/${data.shortLink}`
                setShortURL(formatedShortLink)
                setLoadingResult(false)
                setShowResult(true)
                setBtnQRcode(true)
            }

        } catch (error) {
            setLoadingResult(false)
            // console.log(error)
            if (error.message === "URL inválida") {
                setMsgSubmitBtn("Link inválido!")
                setTimeout(() => {
                    setMsgSubmitBtn("Encurtar")
                }, 2000)
                return
            }

            if (error === "Many requests") {
                setMsgSubmitBtn("Limite atingido!")
                setTimeout(() => {
                    setMsgSubmitBtn("Encurtar")
                }, 2000)
                return
            }

            setMsgSubmitBtn("Tente mais tarde :(")
            toast.info("Tivemos um problema. Mas logo voltaremos!")
            setTimeout(() => {
                setMsgSubmitBtn("Encurtar")
            }, 3000)
        }
    }

    const handleShowQrcode = () => {
        setShowQRcode(true)
        setBtnQRcode(false)
    }


    return (
        <div className="box-form">

            <div className='form-content'>
                <span>Vamos lá!</span>

                <form onSubmit={handleSubmit}>
                    <label>Digite o link a ser encurtado</label>
                    <input onChange={(text) => handleInput(text)} placeholder='Ex: meusitecomlinklongo.com' />

                    <button type='submit' className='btn-form'>{msgSubmitBtn}</button>
                </form>
            </div>

            {loadingResult &&
                <div className='box-result'>
                    <span>{loadingMsg}</span>

                </div>
            }

            {showResult &&
                <div className='box-result'>

                    <span>Fácil, não é mesmo!</span>

                    <div className='result-content' >
                        <span onClick={(e) => handleCopyToClipboard(e)}>{shortURL}</span>
                        <p>Clique para copiar!</p>

                    </div>
                    {btnQRcode && (
                        <button className='btn-form qrcode' onClick={handleShowQrcode}>Que tal um QRcode?</button>
                    )
                    }

                </div>
            }


            {showQRcode &&
                <QRcode qrCodeValue={shortURL} />
            }

            <a href='http://www.linkedin.com/in/0tarsodev' target='_blank'>{'->'}Crafted with ❤️ by 0tarso{'<-'}</a>
        </div>
    )
}

export default Form