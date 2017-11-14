import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addCharacterById} from './../actions';
import {removeCharacterById} from './../actions';

class HeroList extends React.Component{

  constructor(props){
    super(props);
    this.handleRemoveCharacter = this.handleRemoveCharacter.bind(this);
  }

  handleRemoveCharacter(id){
    console.log(id);
    this.props.removeCharacterById(id);
  }

  render(){

    return(

      <div className='allCharacters'>
        <h4>All Heroes</h4>
        <ul className="list-group">

          {this.props.heroes.map((hero) => {
            return(
              <li key={hero.id} className="characterList list-group-item d-flex justify-content-between">
                {hero.name}
                <span
                className="badge badge-default badge-pill"
                onClick={() => this.handleRemoveCharacter(hero.id)}>
                  <i className="fa fa-bath"></i>
                </span>
              </li>
            )
          })}
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

function mapDispatchToState(dispatch){
  return bindActionCreators({addCharacterById,removeCharacterById},dispatch);
}

export default connect(mapStateToProps,mapDispatchToState)(HeroList);
