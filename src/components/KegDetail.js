import React from "react";
import PropTypes from "prop-types";

function KegDetail(props)
{
  const { keg, onClickingDelete } = props;

  let sellButton;
  let pintsLeft;
  if (keg.pints > 0)
  {
    pintsLeft = <h4>Pints: {keg.pints}</h4>;
    sellButton = <button onClick={() => onClickingSell()}>Sell</button>
  } else
  {
    pintsLeft = <h4><strong>Keg is Empty</strong></h4>;
  };

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p><em>{keg.price}</em></p>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;