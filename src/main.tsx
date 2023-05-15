import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.

  const container = document.getElementById('root');
  if (!container) {
    return;
  }
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App, null));
}

main();
