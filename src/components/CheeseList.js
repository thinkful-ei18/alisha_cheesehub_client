import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CheeseList extends Component {

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