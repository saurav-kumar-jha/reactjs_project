import React,{Fragment} from 'react'
import './App.css'

function App() {
  return (
  <>
    <Netfilxseries img="download.jfif" rating="8" />
    <Netfilxseries img="download.jfif" rating="0"/>
    <Welcome/>
  </>

  );
}
const Netfilxseries = (props)=>{
  const Summary = ()=>{
    const p = "Queen of Tears is a South Korean drama series that blends romance, family dynamics, and emotional tension. The story revolves around Baek Hyun-woo, a small-town lawyer, and his wife, Hong Hae-in, a chaebol heiress who leads the Queens Group, a powerful conglomerate. Despite their seemingly fairytale marriage, the couple faces severe marital crises, largely driven by grief over a lost child, miscommunication, and their different ways of handling pain."
    return p;
  };
  return (
    <>
    <div className="box">
        <img src={props.img} alt="download.jfif" />
        <h2>Name: QUEEN OF TEARS</h2>
        <h3>Rating: {(props.rating )+ 2}/10</h3>
        <p><strong>SUMMARY:</strong>{Summary()}</p>
      </div>
    </>
  )
}

function Welcome(){
  const name = "SAURAV kr jha";
  return (
    <>
       <h1>HELLO , {name} </h1>
    </>
  );
}

export default App
