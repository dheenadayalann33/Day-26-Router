import React from 'react';
import Card from '../Compontes/Card';

function Cyber({data}) {
    let filterdata = data.filter((ele)=>ele.type === 'Cyber Security')
    return (
        
        <div>
            <div className='container'>
            <div className='row gy-5'>
                {
                  filterdata.map((element, index) => {
                    return (
                        <Card element={element} index={index}></Card>
                    )
                  })
                }
            </div>
          </div>
        </div>
    );
}

export default Cyber;