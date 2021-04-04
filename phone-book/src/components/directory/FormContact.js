import React from "react";
import { Field, reduxForm } from "redux-form";

class FormContact extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="name" component={this.renderInput} label="Name" />
        <Field name="phone" component={this.renderInput} label="Phone Number" />
        <button className="ui button primary">Add Contact</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter a name";
  }
  if (!formValues.phone) {
    errors.phone = "You must enter a phone number";
  }

  return errors;
};

export default reduxForm({
  form: "FormContact",
  validate,
})(FormContact);
