import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

main();
