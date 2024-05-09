import React from 'react';
import Card from '../Compontes/Card';

function DataScience({data}) {
    let filterdata = data.filter((ele)=>ele.type === 'Data Science')
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

export default DataScience;