import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element not found');
}

createRoot(rootElement).render(<App/>);
