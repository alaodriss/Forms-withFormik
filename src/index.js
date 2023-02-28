import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import FieldLevelValidationExample from "../src/Component/Form"
// import SignupForm from "../src/Component/Form2"


import reportWebVitals from "./reportWebVitals";

import { AppBar, Box, Container,Toolbar, Typography } from "@material-ui/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBar>
      <Toolbar>
        <Typography varient='h5'>
         Forms 
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Box>
        <FieldLevelValidationExample />
         {/* <App /> */}
      </Box>
    </Container>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
