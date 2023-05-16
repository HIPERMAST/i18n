import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";

const locale = navigator.language; // Obtén el idioma del navegador de forma dinámica


ReactDOM.render(
  <IntlProvider locale={locale} messages={locale+".json"}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
