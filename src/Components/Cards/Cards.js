import React from 'react';

const Cards = ({img, name, price}) => {
    return(
        <section class="dib br3 na2 pa2 pa3-ns grow">
        <article class="hide-child relative ba b--black-20 mw5 ">
            <img src={img} class="db" width="300" height="200" alt="abcd" />
            <div class="pa2 bt b--black-20">
            <h1 class="f5 f4-ns mv0">{name}</h1>
            <h1 class="f5 f4-ns mv0">{price}</h1>
            <a class="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#" >ADD</a>
            </div>
        </article>
        </section>

    );
}


export default Cards;