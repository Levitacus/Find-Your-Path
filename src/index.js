import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
*/

class TierRow extends React.Component {
  render() {
    return (
      <div className="tier-row">
        <ul>
          {fillRow()}
        </ul>
      </div>
    );
  }
}

function Square(img) {
  return (
    <li className="square">
      <img src={img} alt=""/>
    </li>
  );
}
//row to be row in tierlist
//i to length of row
function fillRow(row) {
  let img = './favicon.ico';
  let max = 30;
  let squares = [];
  for(let i=0; i<max; i++) {
    squares.push(Square(img));
  }
  return squares;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [[], []],
    }
  }
  render() {
    const rowsJSX = this.state.rows.map((imageArray) => {
      return (
      <div id={this.state.rows.indexOf(imageArray)}>
        <TierRow />
      </div>
      )
    });
    return (
      <div className="TierList">
        {rowsJSX}
      </div>
    );
  }
}
// ========================================
/*
function sideBar(props) {
  //Pass if the sidebar should be shown in props

  //list of components:
  //The components will be images which are buttons that spawn a new component in the work area
  const components = [];

  return(<div id='sideBar'>
      {props.showSidebar && components}
    </div>);
}
*/
// ========================================
/*
function featsContainer(props) {
  
}

function buildContainer(props) {
  
}

function offenseContainer(props) {
  
}

function defenseContainer(props) {
  
}

function skillsContainer(props) {

}

function inventoryContainer(props) {

}
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);