import React, { createContext, Component } from "react";
export const AppContext = createContext("rojo");

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "es",
      theme: "Black",
      changeLocale: this.changeLocale,
      changeTheme: this.changeTheme
    };
  }

  changeTheme = theme => this.setState({ theme });

  changeLocale = () =>
    this.setState(state => {
      const newLocale = state.locale === "es" ? "en" : "es";
      return {
        locale: newLocale
      };
    });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
