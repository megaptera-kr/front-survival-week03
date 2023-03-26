import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}

main();
