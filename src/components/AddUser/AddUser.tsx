import React, { useState } from "react";
import styles from "./AddUser.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { userData } from "../../types/types";
import { userDataValidationSchema } from "../../validation/schemas";
const initial: Omit<userData, "id"> = { name: "", username: "", email: "" };
const AddUser = () => {
  const [openWindow, setOpenWindow] = useState(false);

  const createUser = (newUserData: Omit<userData, "id">) => {
    // changeModalVisible();
    console.log(newUserData);
  };

  const changeModalVisible = () => {
    setOpenWindow(!openWindow);
  };
  return (
    <>
      <button onClick={changeModalVisible}>Add user</button>
      {openWindow && (
        <div className={styles.modalContainer} onClick={changeModalVisible}>
          <div
            className={styles.formContainer}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Formik
              initialValues={initial}
              onSubmit={createUser}
              validationSchema={userDataValidationSchema}
            >
              <Form className={styles.form}>
                <div className={styles.formInputContainer}>
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" autoFocus />
                  <ErrorMessage
                    name="name"
                    render={(msg) => (
                      <span className={styles.formError}>{msg}</span>
                    )}
                  />
                </div>
                <div className={styles.formInputContainer}>
                  <label htmlFor="username">Login</label>
                  <Field type="text" name="username" />
                  <ErrorMessage
                    name="username"
                    render={(msg) => (
                      <span className={styles.formError}>{msg}</span>
                    )}
                  />
                </div>
                <div className={styles.formInputContainer}>
                  <label htmlFor="email">Email</label>
                  <Field type="text" name="email" />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <span className={styles.formError}>{msg}</span>
                    )}
                  />
                </div>

                <button type="submit">Create</button>
                <button type="button" onClick={changeModalVisible}>
                  Cansel
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUser;
