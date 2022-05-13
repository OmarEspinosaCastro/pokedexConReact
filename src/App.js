import React from "react";
import PokemonProvider from "./api/pokemons/PokemonProvider";
import RoutesComponent from "./routes";

function App() {
  return (
    <PokemonProvider>
    <div style={{display:'flex',flexDirection:'column', minHeight:'100vh'}}>
       <RoutesComponent />
    </div>
    </PokemonProvider>
  );
}

export default App;
