import * as React from 'react';
import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    objID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov',
    objID: 1,
  },
];

const numbers = [1, 2, 3, 4];
const expNumbers = numbers.map(n => n*n);

const welcome = {
  greeting: "hello",
  title: "reactjs"
};

function List() {
  return (
    <>
      <ul>
        {list.map(function(item) {
          return <li key={item.objID}>
                   <span>
                     <a href={item.url}>visit</a>
                   </span>
                   {item.title} by 
                   {item.author}
            </li>;
        })}
      </ul>
      <ul>
        {expNumbers.map(function(n) {
          return <li key={n}>{n}</li>;
        })}
      </ul>
    </>
  );
}

function Greet() {
  return (
    <>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" />
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <Greet />
      <List />
    </>
  )
}

export default App
