import React from 'react';
import headerimage from '../images/test.png';

import Header from '../components/Header';

function Implications() {
  return (
      <section className="main-view"> 
        <Header></Header>
        <section className="section-article">
          <img src={headerimage} alt="header"/>
          <h1>Implications</h1>
          <article>
            <p> Text body </p>
          </article>
       </section>
      </section>
  );
}

export default Implications;
