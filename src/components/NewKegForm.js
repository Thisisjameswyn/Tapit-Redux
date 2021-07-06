import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props)
{

  function handleNewKegFormSubmission(event)
  {
    event.preventDefault();
    props.onNewKegCreation({ 
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      pints: parseInt(124), 
      id: v4() });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          name='price'
          placeholder='Price:' />
        <input
          name='alcohol'
          placeholder='Alcohol:' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;