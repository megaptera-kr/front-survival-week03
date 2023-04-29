import ReactDOM from 'react-dom/client';
import App from './App';

import data from '../restaurants.json';

function main() {
  const element = document.getElementById('root');
  if (element) {
    const root = ReactDOM.createRoot(element);

    root.render(<App restaurants={data.restaurants} />);
  }
}

main();
