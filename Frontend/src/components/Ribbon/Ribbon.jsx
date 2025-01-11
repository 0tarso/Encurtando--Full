import "./Ribbon.css"
import { useEffect, useState } from 'react'

const Ribbon = ({ ribbonText }) => {

    const [welcomeText, setWelcomeText] = useState("")

    useEffect(() => {
        handleWriting()
    }, [ribbonText])

    const handleWriting = () => {
        let text = ribbonText
        let writingText = ""

        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                writingText = writingText + text[i]
                setWelcomeText(writingText)
            }, i * 150)
        };
    }

    return (
        <div className='open-container'>
            <div className='open-box'>
                <h1 className='open-title'>{welcomeText}</h1>

            </div>
        </div>
    )
}

export default Ribbon