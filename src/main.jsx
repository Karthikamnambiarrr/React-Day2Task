import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Content from './Components/Content/Content.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Content/>
  </StrictMode>,
)
