import './App.css';
import HomeButton from './components/homeButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HomeButton onClick={()=>alert("you are best")} text="Home"/>
      <HomeButton text="About"/>
      </header>
    </div>
  );
}

export default App;
