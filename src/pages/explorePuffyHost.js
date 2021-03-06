import React from 'react';
import ExploreFilter from '../components/ExploreFilter';
import InteractivePanel from '../components/InteractivePanel';
import puffyhost from '../images/puffyhost_page.png';
import jsondata from '../data/puffyhost.json';
import AppLayout from '../components/AppLayout';

function ExplorePuffyHost({ location }) {
  return (
    <AppLayout pathname={location.pathname} useSideView={true}> 
      <section className="section-explore">
        <ExploreFilter linkname="Huffington Post" linkref="https://www.huffpost.com/entry/a-third-way-for-universities_b_58ce8a71e4b07112b6472ec4"></ExploreFilter>
        <InteractivePanel img={puffyhost} json={jsondata}></InteractivePanel>
      </section>
    </AppLayout>
  );
}

export default ExplorePuffyHost;
