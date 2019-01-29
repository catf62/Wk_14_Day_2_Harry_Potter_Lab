import React from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
import CharacterDetail from '../components/CharacterDetail.js';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters"
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      console.log(jsonString);
      const characterObjects = JSON.parse(jsonString);
      console.log(characterObjects);
      this.setState({characters: characterObjects});
    });
  }

  handleCharacterSelected(index){
    const selectedCharacter= this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

  render(){
    return (
      <>
      <h2>HP Characters</h2>
      <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
      <CharacterDetail character={this.state.currentCharacter} />
      </>
    );
  }
}

export default CharacterContainer;
