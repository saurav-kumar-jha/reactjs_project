import '../App.css'
import serisData from '../api/seriesData.json'
import {SeriesCard} from './list' 
const Netfilxseries = (p) => {
  return (
      <ul>
        {serisData.map((curElem)=>(
          <SeriesCard key={curElem.id} curElem = {curElem} />
        ))}        
      </ul>
  )
}
export default Netfilxseries;