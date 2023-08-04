import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const rootEl = document.getElementById('root');

  if (!rootEl) {
    throw new Error('Root element not found');
  }

  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}

main();
