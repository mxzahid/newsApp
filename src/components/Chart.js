import React,{Component} from "react";
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            chartData: props.chartData
        }
    }
    render()
    {
        return(
            <div>
                <Doughnut
                    
                    data = {this.state.chartData}
                    options = {{
                        borderAlign: "center",
                        maintainAspectRatio: "false",
                        legend: {
                        position: "left",
                        labels:
                        {
                            fontColor: "black",
                            boxWidth:10
                        }
                    }}}
                />
            </div>
        )
    }
}

export default Chart