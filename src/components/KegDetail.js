import React from "react";
import PropTypes from "prop-types";

function KegDetail(props)
{
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p><em>{keg.price}</em></p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;