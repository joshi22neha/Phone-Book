import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchContact, deleteContact } from "../../actions";

class DeleteContact extends React.Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteContact(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.contact) {
      return "Are  you sure you want to delete this contact?";
    } else {
      return `Are  you sure you want to delete this contact with name: ${this.props.contact.name} ?`;
    }
  }

  render() {
    return (
      <Modal
        title="Delete Contact"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contact: state.contacts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchContact, deleteContact })(
  DeleteContact
);
