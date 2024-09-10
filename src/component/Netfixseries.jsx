import '../App.css'
import share from './card.jsx'
import serisData from '../api/seriesData.json'
const Netfilxseries = (p) => {
  return (
    <>
      <ul>
        {
          serisData.map((curElem)=>{
            return(
              <li key={curElem} >
              <div className="box container">
                <img src={curElem.img_url} title={curElem.name} alt="download.jfif" />
                <h2 title={curElem.name} >Name: {curElem.name} </h2>
                <h3>Rating: {curElem.rating}/10</h3>
                <p><strong>SUMMARY: </strong>{curElem.description}</p>
                <p><strong>Cast: </strong>{curElem.cast} </p>
                <p><strong>Genre: </strong>{curElem.genre} </p>
                <a href={curElem.watch_url} target='_blank' >
                  <button title='WATCH NOW'>WATCH NOW</button></a>
              </div>
            </li>
            );
          })
        }
        
      </ul>
    </>
  )
}
export default Netfilxseries;