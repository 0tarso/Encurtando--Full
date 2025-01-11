import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import Ribbon from "../../components/Ribbon/Ribbon";


const Redirect = () => {
    const { shortLink } = useParams()

    const [ribbonMessage, setRibbonMessage] = useState("Redirecionando...")

    useEffect(() => {
        const redirect = async () => {
            try {
                const response = await axios.get(`https://encurtando-gqfn.onrender.com/${shortLink}`)
                const linkToRedirect = response.data

                if (linkToRedirect) {
                    window.location.href = linkToRedirect
                }
            }
            catch (error) {
                if (error.response) {
                    setRibbonMessage("Link com problema...Tente mais tarde!")
                    // console.log(error.response)
                }
            }
        }
        redirect()

    }, [shortLink])


    return (
        <Ribbon ribbonText={ribbonMessage} />
    )
}

export default Redirect