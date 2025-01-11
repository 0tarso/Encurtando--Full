import "./QRcode.css"
import { useRef } from 'react'
import QRCode from 'react-qr-code'

const QRcode = ({ qrCodeValue }) => {
    const svgRef = useRef(null)

    const downloadQR = () => {
        const svg = svgRef.current.querySelector('svg');
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.imageSmoothingEnabled = false
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);

            const pngUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = 'qrcodeEncurtando.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        img.src = url;
    };

    return (
        <div className='container-qrcode'>

            <div ref={svgRef} className='box-qrcode'>
                <QRCode
                    level='L'
                    size={512}
                    value={qrCodeValue}
                    viewBox={'0 0 128 128'}
                />
            </div>

            <button onClick={downloadQR}>Salvar QR</button>
        </div>

    )
}

export default QRcode