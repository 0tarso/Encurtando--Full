import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Redirect from '../Pages/Redirect/redirect';


const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/:shortLink" element={<Redirect />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default RoutesApp