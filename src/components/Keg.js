import React from "react";
import PropTypes from "prop-types"

function Keg(props)
{

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcohol}</p>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcohol: PropTypes.number
}

export default Keg;