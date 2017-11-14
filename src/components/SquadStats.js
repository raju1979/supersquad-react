import React from 'react';
import {connect} from 'react-redux';

class SquadStats extends React.Component{

  constructor(props){
    super(props);
    this.handleRemoveCharacter = this.handleRemoveCharacter.bind(this);
    this.strength = this.strength.bind(this);
    this.speed = this.speed.bind(this);
  }

  handleRemoveCharacter(id){
    console.log(id);
    // this.props.addCharacterById(id);
  }

  strength(){
    let strength = 0;
    this.props.heroes.forEach((item,index) => {
      strength += item.strength;
    })
    return strength;
  }

  speed(){

    let speed = 0;
    this.props.heroes.forEach((item,index) => {
      speed += item.speed;
    })
    return speed;
  }

  render(){

    return(

      <div className='allCharacters'>
        <h4>Squad Stats</h4>
        <ul className="list-group">

              <li  className="list-group-item d-flex justify-content-between">
                Strength : {this.strength()}
              </li>
              <li  className="list-group-item d-flex justify-content-between">
                Speed : {this.speed()}
              </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('state',state)
  return{
    heroes:state.heroes
  }
}



export default connect(mapStateToProps,null)(SquadStats);
