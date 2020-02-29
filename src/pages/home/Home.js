import React from 'react';
import SuperHero from '../../components/superHero/SuperHero';
import data from '../../data';

export default function Home() {
  console.log(data);
  return <section className="superhero-list">{data.map((iData) => <SuperHero key={iData.id} info={iData} />)}</section>;
}
