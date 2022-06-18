// import { Component } from 'react';
import './card-list.styles.css';
import Card from './card.component';

const CardList = ({ monsters }) => {
  // Destructuring object into a monsters variable
  // console.log(monsters); // Array: Array[10]

  return (
    <div className='card-list'>
      {monsters.map(monster => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

/***************************/
// Class Component
/***************************/
// class CardList extends Component {
//   render() {
//     // console.log(this.props); //Object: {monsters: Array[10]}
//     const { monsters } = this.props; // Destructuring object into a monsters variable
//     // console.log(monsters); // Array: Array[10]

//     return (
//       <div className='card-list'>
//         {monsters.map(monster => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
