import logo from './logo.svg';
import './App.css';
import { login, logout, checkLogin } from './utils/authentication';
import LoginWidget from './components/LoginWidget';

function App() {
  return (
    <div className="App">
      <LoginWidget/>
    </div>
  );
}

export default App;
