import React from 'react';

function Card({element, index}) {
    
    return (
        <div className='col-4' key={index}>
             <div className="card ">
                <img src= {element.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.date}</p>
                </div>
            </div>
        </div>
           
       
    );
}

export default Card;