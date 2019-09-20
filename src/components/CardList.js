import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
      <br /><br />
       <div>App built by Edwin Bartunek at <a href="http://www.devhart.io">Devhart.io</a></div>
       <div style={{ fontSize: '.5rem' }}>Cats provided by <a href="http://www.robohash.org">Robohash.org</a></div>
       <div style={{ fontSize: '.5rem' }}>Font from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a></div>
     </div>
  );
}

export default CardList;