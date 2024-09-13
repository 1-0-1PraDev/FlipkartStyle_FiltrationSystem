import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { FilterProvider } from './context/useFilters.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
     <App />
    </FilterProvider>
  </StrictMode>,
)
