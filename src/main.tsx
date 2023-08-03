import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');

  if (!element) return;

  const rooot = ReactDOM.createRoot(element);

  rooot.render(<App />);
}

main();
