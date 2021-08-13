import React, { Component } from "react";
import Chart from "./Chart"
class Classify extends Component {
  constructor(props) {
    super();
    this.state = {
      cats: [],
      isLoading: false,
      article: props.art,
      chartData: {}
    };
  }

  componentDidMount() {
    fetch("http://54.87.142.65:8000/predict", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.state.article),
      })
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            cats: result,
          })
        })
        .then(() =>
        {
                this.convertJsontoChartData()
        })
        .then(() =>
        {
            this.setState({
                isLoading: true
            })
        })
  }         

  convertJsontoChartData()
  {
    let labelArr = [];
    let confidenceArr =[];
    let backgroundColorArr = [];
    this.state.cats.map((cat) =>
    {
        labelArr.push(cat.category)
        confidenceArr.push(cat.ConfidenceN)
        if(cat.category === "Politics"){backgroundColorArr.push("red")}
        if(cat.category === "Viral/odd"){backgroundColorArr.push("blue")}
        if(cat.category === "Tech"){backgroundColorArr.push("green")}
        if(cat.category === "Sports"){backgroundColorArr.push("purple")}
        if(cat.category === "Business"){backgroundColorArr.push("pink")}
        if(cat.category === "Entertainment"){backgroundColorArr.push("yellow")}
        if(cat.category === "Lifestyle"){backgroundColorArr.push("orange")}
        if(cat.category === "Science"){backgroundColorArr.push("brown")}
        if(cat.category === "Local"){backgroundColorArr.push("silver")}
        if(cat.category === "Opinion"){backgroundColorArr.push("white")}
        if(cat.category === "Obituaries"){backgroundColorArr.push("black")}
        if(cat.category === "World"){backgroundColorArr.push("Teal")}
        if(cat.category === "National"){backgroundColorArr.push("Gold")}
        if(cat.category === "Health"){backgroundColorArr.push("Bronze")}
    })

    
    let chartDataObj = 
    {
        labels: labelArr,
        datasets: 
        [{
            label: 'Categories',
            data: confidenceArr,
            backgroundColor: backgroundColorArr

        }   
        ]
    }
    this.setState(
    {
        chartData: chartDataObj
    })
  }


  render() {
    return (
      <div>
        {this.state.isLoading === true? <Chart chartData={this.state.chartData}/>
        :
        <div className = "loader" ></div>}
        
      </div>
    );
  }
}

export default Classify;
