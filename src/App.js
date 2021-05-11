import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/Search-box/Search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }


  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.error(err))
  }

  handleChange = event => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <Searchbox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />



      </div>
    )
  };
}

export default App;
