import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./Player";

function App() {
  return (
    <>
      <div>
        <Player player="Greg" />
        <Player player="Lexa" />
        <Player player="Giorgio" />
        <Player player="David" />
        <Player player="Cedric" />
      </div>

      <div>
        <Player player="Geraldine" />
        <Player player="Noar" />
        <Player player="Rusmir" />
        <Player player="Gilles" />
        <Player player="Guillaume" />
        <Player player="Damien" />
      </div>

      <div>
        <Player player="Haroun" />
        <Player player="Seb" />
        <Player player="Dadoo" />
        <Player player="Amazon" />
        <Player player="Crinou" />
      </div>
    </>
  );
}

export default App;
