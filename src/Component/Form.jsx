import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";

import "./Form.css";


function validateEmail(value) {

  let error;
  if (value) {
     
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    error = "Saisir votre email";
  }
  return error;
}

function validateFirstname(value) {
  let error;
  if (value === "") {
    error = "Saisir votre prénom";
  }
  return error;
}

function validateLastname(value) {
  let error;
  if (value === "") {
    error = "Saisir votre nom";
  }
  return error;
}

function validatePhone(value) {
  let error;
  // var phoneExp = /^(0|\+33 )[1-9]([-. ]?[0-9]{2} ){3}([-. ]?[0-9]{2})$/;

  if (value) {
  } else if (!/^(0|\+33 )[1-9]([-. ]?[0-9]{2} ){3}([-. ]?[0-9]{2})$/i.test(value.phone)){
      error = "Saisir votre numero";
    }
    return error;
}

function validatePays(value) {
  let error;
  if (value === "") {
    error = "Saisir votre pays";
  }
  return error;
}

function validateVille(value) {
  let error;
  if (value === "") {
    error = "Saisir votre ville";
  }
  return error;
}

const FieldLevelValidationExample = () => (
  <div className="forms">
    <h1>Votre identité</h1>
    <Formik
      initialValues={{
        checked: [],
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        pays: "",
        ville: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form className="forms">

          
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="homme" />
              Homme
            </label>
            <label>
              <Field type="checkbox" name="checked" value="femme" />
              Femme
            </label>
          </div>
          <Field
            className="control-form"
            type="text"
            name="firstname"
            validate={validateFirstname}
            placeholder="Votre prénom"
          />
          {errors.firstname && touched.firstname && (
            <div>{errors.firstname}</div>
          )}
          <Field
            className="control-form"
            type="text"
            name="lastname"
            validate={validateLastname}
            placeholder="Votre nom"
          />
          {errors.lastname && touched.lastname && <div>{errors.lastname}</div>}
          
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

          <Field
            className="control-form"
            type="tel"
            name="phone"
            validate={validatePhone}
            placeholder="Tel"
          />

          {errors.phone && touched.phone && <div>{errors.phone}</div>}

          <Field
            className="control-form"
            type="email"
            name="email"
            validate={validateEmail}
            placeholder="Votre email"
          />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <Field
            className="control-form"
            type="pays"
            name="pays"
            validate={validatePays}
            placeholder="Pays"
          />
          {errors.pays && touched.pays && <div>{errors.pays}</div>}

          <Field
            className="control-form"
            type="ville"
            name="ville"
            validate={validateVille}
            placeholder="ville"
          />
          {errors.ville && touched.ville && <div>{errors.ville}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FieldLevelValidationExample;
