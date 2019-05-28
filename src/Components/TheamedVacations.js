import React from "react";

export default class Theamedvacation extends React.Component {
  renderTheamedvacations = vacationsData => {
    return (
      <div className="vacationlist">
        {vacationsData.map(data => (
          <a href={data.url} className="vacationItem">{data.text}</a>
        ))}
      </div>
    );
  };
  render() {
    let vacationListDiv = null;
    console.log("theamedVacation:", this.props.theamedVacation);
    if (this.props.theamedVacation.length !== 0)
      vacationListDiv = this.renderTheamedvacations(this.props.theamedVacation);
    return <div className="destinationContainer">{vacationListDiv}</div>;
  }
}
