import React from 'react';
import ReactDOM from 'react-dom';
import EditableRequestTable from './App.jsx';

var REQUESTS = [
  {plates: '123cdv23', building: 'Delta', date: '20/05/2016', time: '7h-13h', spot: 'niveau 2, place 48'},
  {plates: '402CD123', building: 'Delta', date: '20/05/2016', time: '13h-20h', spot: 'niveau 2, place 45'},
  {plates: '402k123', building: 'Boulogne', date: '21/05/2016', time: '7h-20h', spot: 'niveau 2, place 48'}
];




ReactDOM.render(<EditableRequestTable requests={REQUESTS}/>, document.getElementById('app'));