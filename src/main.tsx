import { createRoot } from 'react-dom/client';

import App from './App';

function main() {
  const domNode = document.getElementById('root');

  if (!domNode) {
    return;
  }

  const root = createRoot(domNode);
  root.render(<App />);
}

main();
