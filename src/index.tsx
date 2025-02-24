import { createRoot } from 'react-dom/client'
import './index.css'
import {StrictMode} from "react";
import ContactApp from "./components/ContactApp.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ContactApp/>
        </BrowserRouter>
    </StrictMode>
)
