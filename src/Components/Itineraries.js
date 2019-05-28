import React from "react";
const RenderDestinationList = destinations => {
    console.log("Destinations::", destinations);
    return (
      <div className="itineraryList">
        {destinations.destinations.map(data => (
          <a href={data.url} className="itineraryitem">
            {data.text}
          </a>
        ))}
      </div>
    );
  };
export default class Itineraries extends React.Component{
    renderMenuBar = itineraryMap=>{
        return (
            <div className="menuItem" id="navigationMenu">
                {itineraryMap.map(data=>(
                    <a href={`#${data}`} className="flexItem">{data}</a>
            ))}
            </div>
        )

    }
    renderItineraries = itineraryMap =>{
    
        return (
        <div className="displayflex_c border">
          {Object.keys(itineraryMap).map((data, index)=>(
              <div className="flexContainer" key = {index}>
            <div className="w5p" name={data} id={data}>{data}</div>
           
            <RenderDestinationList destinations={itineraryMap[data]}/> 
            </div>)
            )
            }
        
        </div>);
    }
    myFunction = ()=>{
        console.log("navbar and sticky:", this.navbar, this.sticky);
        let navbar =document.getElementById("navigationMenu");
        let sticky= 688;
        if (window.pageYOffset >= this.sticky) {
            console.log("AddClass", window.pageXOffset, window.pageYOffset, sticky);
            navbar.classList.add("sticky")
          } else {
              console.log("RemoveClass",window.pageXOffset, window.pageYOffset, sticky);
            navbar.classList.remove("sticky");
          }  
    }
    render(){
        let navBar = null;
        let itinerariesList = null;
        if(this.props.all !== null){
            console.log("Props Itineraries:",this.props.all,Object.keys(this.props.all).sort());
            navBar = this.renderMenuBar(Object.keys(this.props.all).sort());
            itinerariesList = this.renderItineraries(this.props.all);
        }
        window.onscroll = this.myFunction;
        return(
            <div className="displayflex_c border">
               {navBar}
                <div className="displayflex_c">{itinerariesList}</div>
            </div>
        )
    }
}