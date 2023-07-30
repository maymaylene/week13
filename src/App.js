import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navigation from './components/Navigation';
import Log from './components/LoginForm';


function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
    <Log /> 
    </div>

  );
}

export default App;
