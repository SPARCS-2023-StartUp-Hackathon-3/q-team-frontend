import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NoEncryptionGmailerrorred } from "@mui/icons-material";

const theme = createTheme({
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: 'none',
  //         color: '#757575',
  //         // backgroundColor: '#FFFFFF',
  //         // '&.Mui-focused': {
  //         //   color: '#D34658'
  //         }
  //       }
  //     }
  //   },
  palette: {
    Black: { main: "#121212" },
    Primary1: { main: "#242F9B" },
    Primary2: { main: "#646FD4" },
    Primary3: { main: "#9BA3EB" },
    Primary4: { main: "#DBDFFD" },
    Primary5: { main: "#F2F4FF" },
    Gray1: { main: "#F8F8F8" },
    Gray2: { main: "#EBEBEB" },
    Gray3: { main: "#CCCCCC" },
    Gray4: { main: "#999999" },
    Gray5: { main: "#666666" },
    Gray6: { main: "#333333" },
    White: { main: "#FFFFFF" },
    Red: { main: "#F17154" },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <SnackbarProvider 
            maxSnack={1} 
            anchorOrigin={
              {
                vertical: 'bottom',
                horizontal: 'left',
              }
            }
            >
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
        </SnackbarProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
