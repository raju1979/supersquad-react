import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addCharacterById} from './../actions';

class CharacterList extends React.Component{

  constructor(props){
    super(props);
    this.handleAddCharacter = this.handleAddCharacter.bind(this);
  }

  handleAddCharacter(id){
    console.log(id);
    this.props.addCharacterById(id);
  }

  render(){

    return(

      <div className='allCharacters'>
        <h4>All Characters</h4>
        <ul className="list-group">

          {this.props.characters.map((character) => {
            return(
              <li key={character.id} className="characterList list-group-item d-flex justify-content-between">
                {character.name}
                <span
                className="badge badge-default badge-pill"
                onClick={() => this.handleAddCharacter(character.id)}>
                  <i className="fa fa-bolt" aria-hidden="true"></i>
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
    characters:state.characters
  }
}

function mapDispatchToState(dispatch){
  return bindActionCreators({addCharacterById},dispatch);
}

export default connect(mapStateToProps,mapDispatchToState)(CharacterList);
