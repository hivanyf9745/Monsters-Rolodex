import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  // console.log('render');
  const [searchField, setSearchField] = useState('a'); // [value, setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('');

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  };

  useEffect(() => {
    // console.log('effect.fired');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  console.log('rendered');
  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/***************************/
// Class Component
/***************************/
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     // console.log('constructor');
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // console.log('render');
//     const { monsters, searchField } = this.state; // ES6 destructruing
//     const { onSearchChange } = this; //ES6 destructuring

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         })
//       );
//   }
// }

export default App;
