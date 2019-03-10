import React, { Component } from "react";
import { AppContext } from "../context/AppContext";

class Main extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {val => (
          <div className="main">
            <p className="App-intro">
              {val.locale === "es"
                ? "Mi nombre es Mextli, soy desarrollador frontend y me gusta el sushi."
                : "My name is Mextli, I'm frontend developer and I like sushi"}
            </p>
            <div className="control">
              <button
                className={val.theme}
                onClick={() => val.changeTheme("Black")}
              >
                {val.locale === "es" ? "Tema Negro" : "Theme Black"}
              </button>
              <button
                className={val.theme}
                onClick={() => val.changeTheme("Blue")}
              >
                {val.locale === "es" ? "Tema Azul" : "Theme Blue"}
              </button>
              <button
                className={val.theme}
                onClick={() => {
                  val.changeTheme("Green");
                }}
              >
                {val.locale === "es" ? "Tema Verde" : "Theme Green"}
              </button>
              <button className={val.theme} onClick={val.changeLocale}>
                {val.locale === "es" ? "Cambiar lenguaje" : "Change Lenguage"}
              </button>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Main;
