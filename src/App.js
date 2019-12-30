import React from 'react';
import ButtonDropDown from './component/button-dropdown';
import InputDropDown from './component/input-dropdown';

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

function App() {
  return (
    <>
      <ButtonDropDown/>
      <InputDropDown list={ data } />
    </>
  );
}

export default App;
