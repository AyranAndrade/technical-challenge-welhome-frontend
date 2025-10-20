import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element not found');
}

createRoot(rootElement).render(<h1>Hello</h1>);
