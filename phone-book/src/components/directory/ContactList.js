import React from "react";
import { connect } from "react-redux";
import { fetchContacts, deleteContact } from "../../actions";
import { Link } from "react-router-dom";

class ContactList extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  tableBody() {
    return this.props.contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td data-label="Name">{contact.name}</td>
          <td data-label="Phone Number">{contact.phone}</td>
          <td data-label="Action">
            <Link
              to={`/contacts/delete/${contact.id}`}
              className="ui button negative"
            >
              Delete
            </Link>
          </td>
        </tr>
      );
    });
  }

  renderList() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.tableBody()}</tbody>
      </table>
    );
  }

  renderHome() {
    return (
      <div
        class="ui segment"
        style={{ height: "200px", textAlign: "center", fontSize: "40px" }}
      >
        <p>No Contacts Available</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 className="ui header">
          <div style={{ textAlign: "right" }}>
            <Link to="/contacts/new" className="ui button primary">
              Create Contact
            </Link>
          </div>
        </h2>
        {this.props.contacts != "" ? this.renderList() : this.renderHome()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: Object.values(state.contacts),
  };
};

export default connect(mapStateToProps, { fetchContacts, deleteContact })(
  ContactList
);
