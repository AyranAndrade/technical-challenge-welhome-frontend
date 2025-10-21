import { createRoot } from 'react-dom/client';
import PropertyTable from './components/PropertyTable.tsx';
import propertyGetterService from './services/PropertiesGetterService.ts';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Element not found');
}

var properties = await propertyGetterService.getAll();

createRoot(rootElement).render(<PropertyTable properties={properties}/>);
