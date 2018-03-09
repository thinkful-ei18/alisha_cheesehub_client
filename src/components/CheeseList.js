import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCheeses } from '../actions/cheese.actions' 

export class CheeseList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {

    const cheeseList = this.props.cheeses.map((cheese, index) => (
      <li key={index}>
        {cheese}
      </li>
    ))

    return(
      <div>
        <ul>
          {cheeseList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList) 