import React from 'react';
import ReactTable from 'react-table';
import './Table.css';

const data = [{
  name: 'Hello',
  age: 26,
  friend: {
    name: 'Dude',
    age: 23,
  }
  },
  {
  name: 'Orion',
  age: 22,
  friend: {
  name: 'Open',
  age: 21,
}}];

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Age',
  accessor: 'age',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'friendName', // Required because our accessor is not a string
  Header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: props => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}];
class Table extends React.Component {

  render() {

  return(

  <ReactTable
    data={data}
    columns={columns}
    minRows="5"
  />
)

}
}

export default Table;
