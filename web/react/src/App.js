import "./App.css";
import Scoreboard from "./pages/Scoreboard";
import '@progress/kendo-theme-default/dist/all.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://www.panteon.games/wp-content/themes/panteon/assets/img/logo.png"
          alt="logo"
          className="logo-img"
        ></img>
        <Scoreboard></Scoreboard>
      </div>


    </div>
  );
}

export default App;
