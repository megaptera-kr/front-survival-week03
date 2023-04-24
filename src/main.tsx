import ReactDOM from 'react-dom/client';
import App from './App';

function main() {
  const element = document.getElementById('root');

  if (!element) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(element);

  root.render(
    <App />,
  );
}
main();
