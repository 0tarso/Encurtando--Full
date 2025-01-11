import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './Routes/routes';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
