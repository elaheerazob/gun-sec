import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';

function App() {
  const [guns,setGuns] =useState([])
  // console.log(guns);
  const [card,setCard] =useState([])
  const buttonAddtoCard = (data) => {
    // console.log(data);
    const newData = [...card,data]
    setCard(newData)
    console.log(newData);
  }
  useEffect( () => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])
  return (
    <div>
      <Navbar></Navbar>
      {
        card.map(gunName => <h1 key={gunName.id}>{gunName.name}</h1>)
      }
      <div className='gun'>
        {
          guns.map(gun => <Card key={gun.id} data={gun} buttonAddtoCard={buttonAddtoCard}></Card>)
        }
      </div>
    </div>
  );
}

export default App;
