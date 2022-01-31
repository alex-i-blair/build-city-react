import React from 'react';

export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {/* This kind of component should be familiar by now. It takes in (as props) an array of slogans */}
      {slogans.map((slogan, i) => <li key={`${slogan}-${i}`}>
        {slogan}
      </li>)
      }
      {/* Then map over those slogans and for each slogan, render a Slogan component. Supply a key and a slogan as props to each Slogan component */}
    </section>
  );
}
