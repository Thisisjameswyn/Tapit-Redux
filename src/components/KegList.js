import React from "react";
import Keg from "./Keg";


const masterKegList = [
  {
    name: "RPM",
    brand: "Boneyard",
    price: 6.00,
    alcohol: 7.2
  },
  {
    name: "Pfriem",
    brand: "Faily Ipa",
    price: 6.00,
    alcohol: 7.5
  },
  {
    name: "Outburst",
    brand: "Pyramid",
    price: 4.00,
    alcohol: 8.5
  }
];





function KegList()
{
  return (
    <React.Fragment>
      <hr />
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcohol={keg.alcohol}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default KegList;


// name: PropTypes.string.isRequired,
// brand: PropTypes.string.isRequired,
// price: PropTypes.number,
// alcohol: PropTypes.number