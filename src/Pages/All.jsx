import React from 'react';
import Card from '../Compontes/Card';

function All({ data }) {
    return (
        <>
          <div className='container'>
            <div className='row gy-5'>
                {
                  data.map((element, index) => {
                    return (
                        <Card element={element} index={index}></Card>
                    )
                  })
                }
            </div>
          </div>
        </>
    );
}

export default All;