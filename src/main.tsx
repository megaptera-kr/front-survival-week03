import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');
  if (!element) {
    return;
  }
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
  // TODO: App 컴포넌트를 render 해주세요.
}

main();
