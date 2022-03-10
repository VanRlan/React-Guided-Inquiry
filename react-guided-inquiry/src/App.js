import "./App.css";
import React from "react";
import BasicInfo from "./components/BasicInfo.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      people: [
        {
          name: "Von",
          number: "704-392-6729",
          birthDate: "05/20/2003",
        },
        {
          name: "VanTheMan",
          number: "704-246-5321",
          birthDate: "07/12/2004",
        },
        {
          name: "Vin",
          number: "704-466-5678",
          birthDate: "08/14/2005",
        },
      ],
    };
  }
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key="{index}" person={person} />;
    });
  }
}

export default App;
