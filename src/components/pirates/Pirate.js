import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Pirate = (props) => {
  const url = "/pirates/" + props.pirate.id;
  if(!props.pirate){
    return "Loading..."
  }
  return (
    <Fragment>
      <Link to={url} className="name">{props.pirate.firstName} {props.pirate.lastName}</Link>
      <p>Age:{props.pirate.age}</p>
      <p>Ship: {props.pirate.ship.name}</p>
    </Fragment>
  )
}

export default Pirate;
