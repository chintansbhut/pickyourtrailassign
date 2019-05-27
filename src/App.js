import React from "react";
import * as data from "./sample.json";
import "./App.css";
import Destination from "./Components/Destinations";
import Theamedvacation from "./Components/TheamedVacations";
import Allitineraries from "./Components/All";
import _ from "lodash";
class App extends React.Component {
  state = { destination: [], theamedVacations: [], all: null };
  componentDidMount() {
    let destinationArray = [];
    let theamedVac = [];
    let groupItineraries = [];

    destinationArray = _.uniqBy(data.default.destinations, "text");
    theamedVac = _.unionBy(data.default.vacations, "text");
    // groupItineraries = _.keyBy(data.default.itineraries, function(o) {
    //   return o.text[0];
    // });
    let allGroupBy = _.groupBy(data.default.itineraries, function(o) {
      if (o.text[0] !== " ") {
        if (isNaN(o.text[0])) return o.text[0].toUpperCase();
        else {
          return "0-9";
        }
      } else {
        if (isNaN(o.text[1])) return o.text[1].toUpperCase();
        else {
          return "0-9";
        }
      }
    });
    console.log("allGroupBy:", allGroupBy);
    this.setState({
      destination: destinationArray,
      theamedVacations: theamedVac,
      all: allGroupBy
    });
  }
  render() {
    return (
      <div className="App">
        <h4>Pickyourtrail stiemap</h4>
        <div> Destination</div>
        <Destination destinations={this.state.destination} />
        <hr />
        <div>Themed Vacation</div>
        <Theamedvacation theamedVacation={this.state.theamedVacations} />
        <hr />
        <div>Showing all 340 pages</div>
        <Allitineraries all={this.state.all} />
        <hr />
      </div>
    );
  }
}

export default App;
