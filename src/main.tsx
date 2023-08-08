import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const element = document.getElementById('root')!;

  const rootElement = ReactDOM.createRoot(element);

  rootElement.render(<App />);
}

main();
