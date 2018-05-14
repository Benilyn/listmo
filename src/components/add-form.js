import React from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm, formValueSelector } from 'redux-form';

let AddFormValues = props => {
  const {
    title,
    duedate,
    details,
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;

  return (
    <form onSubmit={handleSubmit}>
    	<div>
        	<Field
            	name="title"
            	component="input"
            	type="text"
            	placeholder="Title"
        	/>
        	<Field
	            name="duedate"
	            component="input"
	            type="date"
	            placeholder="Due Date"
        	/>
        	<Field
	            name="details"
	            component="input"
	            type="text"
	            placeholder="Details"
        	/>
        </div>
        <div>
	        <button type="submit" disabled={pristine || submitting}>
	        	Add {title}
	        </button>
	        <button type="button" disabled={pristine || submitting} onClick={reset}>
	        	Reset
	        </button>
      </div>
    </form>
  )
}


AddFormValues = reduxForm({
  form: 'selectingAddFormValues' 
})(AddFormValues)


const selector = formValueSelector('selectingAddFormValues') 
AddFormValues = connect(state => {
  
  const titleValue = selector(state, 'title');
  const duedateValue = selector(state, 'duedate');
  const detailsValue = selector(state, 'details');
  return {
    titleValue,
    duedateValue,
    detailsValue
  }
})(AddFormValues)

export default AddFormValues