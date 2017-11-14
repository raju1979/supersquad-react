import React from 'react';
import  './../assets/bootstrap.css';
import  './../styles/index.css';
import "../assets/font-awesome.css";

import Header from './Header';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Header />
        <div className='bodyArea'>
          <CharacterList />
          <HeroList />
          <SquadStats />
        </div>
      </div>
    )
  }
}

export default App;
