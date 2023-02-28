// import React, { useState } from "react";
// import { Button, Card, CardContent, TextField } from "@material-ui/core";
// import { Field, Formik, Form } from "formik";
// import * as Yup from "yup";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Card mt={105}>
//         <CardContent>
//           <Formik
//             //Les valeurs initiales Ex : email , Tel ...
//             initialValues={{ name: "", age: 18, description: "", phone: "" }}
//             // Validation des errors avec Yup
//             validationSchema={Yup.object().shape({
//               name: Yup.string().required("Name is Required"),
//               age: Yup.number().required("Age is Required").min(18, "Only +18"),
//               phone: Yup.number()
//                 .typeError("That doesn't look like a phone number")
//                 .positive("A phone number can't start with a minus")
//                 .integer("A phone number can't include a decimal point")
//                 .min(8)
//                 .required("A phone number is required"),
//               description: Yup.string().min(10),
//             })}
//             onSubmit={(values, { setSubmitting }) => {
//               setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 setSubmitting(false);
//               }, 400);
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               isSubmitting,
//               validateField,
//               /* and other goodies */
//             }) => (
//               <Form onSubmit={handleSubmit}>
//                 <FormSteps
//                   isSubmitting={isSubmitting}
//                   validateField={validateField}
//                   errors={errors}
//                   touched={touched}
//                 >
//                   <Field
//                     type="text"
//                     name="name"
//                     id="name"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.name}
//                     placeholder="Your name"
//                     component={TextField}
//                     error={errors.name ? true : false}
//                     helperText={errors.name && errors.name}
//                   />
//                   <Field
//                     type="number"
//                     name="age"
//                     id="age"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.age}
//                     placeholder="Your Age"
//                     component={TextField}
//                     error={errors.age ? true : false}
//                     helperText={errors.age && errors.age}
//                   />

//                   <Field
//                     type="tel"
//                     name="phone"
//                     id="phone"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.phone}
//                     placeholder="Your Number Phone"
//                     component={TextField}
//                     error={errors.phone ? true : false}
//                     helperText={errors.phone && errors.phone}
//                   />

//                   <Field
//                     type="text"
//                     name="description"
//                     id="description"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.description}
//                     placeholder="Description"
//                     component={TextField}
//                     error={errors.description ? true : false}
//                     helperText={errors.description && errors.description}
//                   />
//                 </FormSteps>
//               </Form>
//             )}
//           </Formik>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// const FormSteps = (props) => {
//   const childrenArr = React.Children.toArray(props.children);
//   console.log(childrenArr[0]);

//   const [step, setStp] = useState(1);

//   const name = childrenArr[step - 1].props.name;
//   const isError = props.errors[name] ? true : false;
//   const isTouched = props.touched[name] ? true : false;
//   const isEmpty =
//     childrenArr[step - 1].props.value !== "" &&
//     !childrenArr[step - 1].props.value
//       ? true
//       : false;

//   const goBack = () => {
//     setStp(step - 1);
//   };

//   const goNext = () => {
//     if (isTouched && !isError) {
//       setStp(step + 1);
//     } else if (!isEmpty && !isError) {
//       setStp(step + 1);
//     } else {
//       props.validateField(name);
//     }
//   };
//   return (
//     <>
//       {childrenArr[step - 1]}

//       {step > 1 && (
//         <Button
//           disabled={props.isSubmitting}
//           variant="contained"
//           color="secondary"
//           onClick={goBack}
//         >
//           Back
//         </Button>
//       )}

//       {step < childrenArr.length && (
//         <Button
//           disabled={props.isSubmitting}
//           variant="contained"
//           onClick={goNext}
//         >
//           Next
//         </Button>
//       )}

//       {step === childrenArr.length && (
//         <Button
//           type="submit"
//           disabled={props.isSubmitting}
//           variant="contained"
//           color="primary"
//         >
//           Submit
//         </Button>
//       )}
//     </>
//   );
// };

// export default App;
