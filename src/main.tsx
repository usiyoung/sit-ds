import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import {GlobalStyle} from "sit-ui/globals";

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle/>
    <App />
  </>,
)
