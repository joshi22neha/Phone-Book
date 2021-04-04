import React from "react";
import { connect } from "react-redux";
import { createContact } from "../../actions";
import FormContact from "./FormContact";

class CreateContact extends React.Component {
  onSubmit = (formValues) => {
    this.props.createContact(formValues);
  };
  render() {
    return (
      <div>
        <h2 className="ui header">
          <div className="content">Create a Contact</div>
        </h2>
        <FormContact onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createContact })(CreateContact);
