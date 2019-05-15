import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getStarWars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getStarWars();
    console.log("cdm", this.props)
  }

  render() {
    console.log("render", this.props);
    if (this.props.isFetching) {
    console.log("isFetching if statement", this.props)
      return (
        <h1>Star Wars characters loading</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log("state", state);
  return {
      characters: state.charsReducer.characters,
      isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    getStarWars
  }
)(CharacterListView);

