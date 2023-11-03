import ReactDOM from 'react-dom/client';
import App from './App';
// eslint-disable-next-line import/no-unresolved
import './main.css';

function main() {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
main();
