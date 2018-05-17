import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/action-index';
import {Field, reduxForm, reset} from 'redux-form';

export class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
    console.log('testing add-form for projects');
  }

  setEditing(editing) {
    this.setState({editing});
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="add-button"
          onClick = {() => this.setEditing(true)}>
            <button className="add-button">
              Add {this.props.type}
            </button>
        </div>
      );
    }
    return (
      <form className="add-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="title">
          <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
          />
        </div>
        <div  className="duedate">
          <Field
              name="duedate"
              component="input"
              type="date"
              placeholder="Due Date"
          />
        </div>
        <div  className="details">
          <Field
              name="details"
              component="input"
              type="text"
              placeholder="Details"
          />
        </div>
        <div className="buttons">
          <button type="submit">
            Add
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addForm: state.projectTask
  };
};

AddForm = connect(mapStateToProps)(AddForm);

export default reduxForm({
  form: 'AddForm'
})(AddForm);

