import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div>
      <Component endpoint="data"/>
      <Component endpoint="error"/>
      <Component endpoint="loading"/>
    </div>
  );
}

export default App;
