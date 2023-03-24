import * as ReactDOM from 'react-dom';
import App from './App';

function main() {
  // TODO: App 컴포넌트를 render 해주세요.
  const container = document.getElementById('root');

  if (!container) return;
  ReactDOM.render(<App />, container);
}

main();
