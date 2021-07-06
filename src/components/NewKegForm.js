import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props)
{

  function handleNewKegFormSubmission(event)
  {
    event.preventDefault();
    props.onNewKegCreation({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4() });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Keg name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          name='price'
          placeholder='Price:' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;