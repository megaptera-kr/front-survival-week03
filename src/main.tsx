import reactDOM from 'react-dom/client';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const elementRoot = document.getElementById('root');
  if (!elementRoot) {
    return;
  }
  const root = reactDOM.createRoot(elementRoot);
  root.render(<App />);
}

main();
