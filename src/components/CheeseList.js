import React, { Component } from 'react';

export default class CheeseList extends Component {
  // this.props: cheeses={["Bath Blue", "Barkham Blue", "Buxton Blue"]}

  render() {
    const cheeseList = this.props.cheeses.map(cheese => <li>{cheese}</li>)

    return(
      <div>
        <ul>
          {cheeseList}
        </ul>
      </div>
    );
  }
}