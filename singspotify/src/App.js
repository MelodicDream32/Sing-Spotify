import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js';
import Dashboard from './Dashboard.js';

// Searches the URL for the parameter of code and passes it to code const after authentication.
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
