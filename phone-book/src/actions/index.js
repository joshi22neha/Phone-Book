import directory from "../services/directory";
import history from "../history";

export const createContact = (formValues) => {
  return async (dispatch) => {
    const response = await directory.post("/contacts", { ...formValues });
    dispatch({
      type: "CREATE_CONTACT",
      payload: response.data,
    });

    history.push("/");
  };
};

export const fetchContacts = () => async (dispatch) => {
  const response = await directory.get("/contacts");
  dispatch({ type: "FETCH_CONTACTS", payload: response.data });
};

export const fetchContact = (id) => async (dispatch) => {
  const response = await directory.get(`/contacts/${id}`);
  dispatch({ type: "FETCH_CONTACT", payload: response.data });
};

export const deleteContact = (id) => async (dispatch) => {
  await directory.delete(`/contacts/${id}`);
  dispatch({ type: "DELETE_CONTACT", payload: id });
  history.push("/");
};
