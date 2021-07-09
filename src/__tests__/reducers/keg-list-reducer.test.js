import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () =>
{
  let action;
  const kegData = {
    name: "RPM",
    brand: "Boneyard",
    price: "5",
    alcohol: "7.2",
    id: 1
  };

  test("Should correctly add new keg data to masterKegList", () =>
  {
    const { name, brand, price, alcohol, id } = kegData;
    action = {
      type: "ADD_KEG",
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        id: id
      }
    })
  })

  test("Should return default state if there is no action type passed into the reducer", () =>
  {
    expect(kegListReducer({}, { type: null })).toEqual({})
  });
});