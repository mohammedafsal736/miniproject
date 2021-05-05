import React from 'react';
import Cards from './Cards';


const Cardl = ({ products }) => {
    const cardComponent = products.map((user, i) => {
        return <Cards img={products[i].img} name={products[i].name} price={products[i].price} />
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default Cardl;