import ReactDom from 'react-dom/client';
import App from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDom.createRoot(container);
  root.render(<App />);
}

main();
