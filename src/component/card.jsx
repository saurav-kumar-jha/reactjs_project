import "../App.css"
const Card = (props) => {
    return (
        <>
            <div className="container">
                <img src={props.img} alt="none" title={props.name} />
                <p className="name" title={props.name} >Name: {props.name} </p>
                <p className="about"><strong>About me: </strong>{props.about} </p>
                <button onClick={share} title='CLICK TO SHARE' >share</button>
            </div>
        </>
    )
}
const share = ()=>{
      return alert("SHARE KAREGA LAUDE! APNI SHAKAL DEKHI HAI")
}
export default Card;