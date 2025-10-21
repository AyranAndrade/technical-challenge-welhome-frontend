import { createRoot } from 'react-dom/client';
import PropertiesTable from './pages/PropertiesTable.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element not found');
}

createRoot(rootElement).render(<PropertiesTable/>);
