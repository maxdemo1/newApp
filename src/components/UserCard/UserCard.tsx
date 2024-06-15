import React, { useState } from "react";
import { userData, usersProps } from "../../types/types";
import { useTypedDispatch } from "../../redux/hooks/hooks";
import { deleteUser, editUser } from "../../redux/Users/operations";
import { Field, Form, Formik } from "formik";

const UserCard: React.FC<usersProps> = ({
  userData,
  advancedOptions,
  editedContact,
  setEditedContact,
}) => {
  const [editState, setEditState] = useState(false);
  const { name, username, email, id } = userData;
  const dispatch = useTypedDispatch();

  const changeUserData = (values: userData) => {
    if (
      Object.keys(values).filter((key) => values[key] === userData[key])
        .length === 4
    ) {
      setEditedContact(false);
      return;
    }

    dispatch(editUser(values));
  };

  return (
    <div style={{ border: "1px, solid, black" }}>
      {advancedOptions && (
        <div>
          <button
            onClick={() => {
              dispatch(deleteUser(id));
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setEditState(!editState);
              setEditedContact(userData.id);
            }}
          >
            Edit
          </button>
          {editedContact === userData.id && (
            <>
              <button form={"user" + id} type="submit">
                Save
              </button>
              <button
                onClick={() => {
                  setEditState(!editState);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      )}
      {!(editedContact === userData.id) ? (
        <div>
          <p>Name</p>
          <p>{name}</p>
          <p>UserName</p>
          <p>{username}</p>
          <p>Email</p>
          <p>{email}</p>
        </div>
      ) : (
        <Formik initialValues={{ ...userData }} onSubmit={changeUserData}>
          <Form id={"user" + id}>
            <p>Name</p>
            <Field autoFocus type="text" name="name" />
            <p>UserName</p>
            <Field type="text" name="username" />
            <p>Email</p>
            <Field type="text" name="email" />
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default UserCard;
