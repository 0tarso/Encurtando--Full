import './Home.css'

import { useEffect, useState } from 'react'

import Form from '../../components/Form/Form'
import Ribbon from '../../components/Ribbon/Ribbon'


const Home = () => {
    const [openApp, setOpenApp] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setOpenApp(false)
        }, 3000)

        console.log("Opened")

    }, [])

    if (openApp) {
        return (
            <Ribbon ribbonText="Bem-vindo(a)" />
        )
    }

    return (
        <div className="container">
            <div className='box-content'>
                <h1 className='title'>Encurtando</h1>
                <span className='firstSubtitle'>Diminua seus caminhos</span>
                <span className='secondSubtitle'>Aumente suas possibilidades</span>

                <div className='box-description'>

                    <div className='description'>
                        <div className='description-title'>
                            <h3>Por quê encurtar links?</h3>
                            <img src='/pqEncurtar.gif' alt='Encurtando links' />
                        </div>
                        <p>Encurtar links melhora a estética, facilita o compartilhamento, economiza espaço e reduz erros ao copiar, tornando a comunicação mais <strong>eficiente e profissional.</strong></p>
                    </div>


                    <div className='description'>
                        <div className='description-title'>
                            <h3>Preciso pagar para gerar?</h3>
                            <img src='/gratuito.gif' alt='Encurtando links' />
                        </div>
                        <p><strong>O uso É GRATUITO!</strong> Você pode gerar até 5 links diários que ficarão disponíveis por 1 mês! Junto ao link, você recebe um QRcode para facilitar sua comunicação!</p>
                    </div>

                </div>
            </div>

            <Form />

        </div>
    )
}

export default Home