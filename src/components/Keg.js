import React from "react";
import PropTypes from "prop-types"

function Keg(props)
{

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.alcohol}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;