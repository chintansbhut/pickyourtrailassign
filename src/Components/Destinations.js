import React from "react";
import "./Destination.css";
export default class Destination extends React.Component {
  renderDestinationList = destinations => {
    return (
      <div className="destinationList">
        {destinations.map(data => (
          <a href={data.url} className="destinationItem">
            {data.text}
          </a>
        ))}
      </div>
    );
  };
  render() {
    let destinationListDiv = null;
    if (this.props.destinations.length !== 0)
      destinationListDiv = this.renderDestinationList(this.props.destinations);
    return <div className="destinationContainer"> {destinationListDiv}</div>;
  }
}
