import React from 'react';
export const SeriesCard = ({curElem}) => {
    const {img_url,name,rating,description,cast,genre,watch_url} = curElem;
    return (
        <>
        <li>
            <div className="box container" id='container'>
                <img src={img_url} title={name} alt="download.jfif" />
                <h2 title={name} >Name: {name} </h2>
                <h3>Rating: {rating}/10</h3>
                <p><strong>SUMMARY: </strong>{description}</p>
                <p><strong>Cast: </strong>{cast} </p>
                <p><strong>Genre: </strong>{genre} </p>
                <a href={watch_url} target='_blank' >
                <button title='WATCH NOW'>WATCH NOW</button></a>
            </div>
            
        </li>
        
        </>
    );
}
export default SeriesCard;