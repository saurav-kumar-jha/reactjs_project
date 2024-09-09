import '../App.css'
import share from './card.jsx'
const Netfilxseries = (p)=>{
    const Summary = ()=>{
      const p = "Queen of Tears is a South Korean drama series that blends romance, family dynamics, and emotional tension. The story revolves around Baek Hyun-woo, a small-town lawyer, and his wife, Hong Hae-in, a chaebol heiress who leads the Queens Group, a powerful conglomerate. Despite their seemingly fairytale marriage, the couple faces severe marital crises, largely driven by grief over a lost child, miscommunication, and their different ways of handling pain."
      return p;
    };
    let age = 23;
    return (
      <>
        <div className="box container">
          <img src={p.img} alt="download.jfif" /> 
          <h2>Name: QUEEN OF TEARS</h2>
          <h3>Rating: {(p.rating )+ 2}/10</h3>
          <p><strong>SUMMARY:</strong>{Summary()}</p>
          <button onClick={share} >{age > 18? "WATCH NOW":"NOT AVAILABILE" }</button>
        </div>
      </>
    )
}
export default Netfilxseries;