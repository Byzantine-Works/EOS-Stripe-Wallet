import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';


const CpuCost = props => {
    let dt = [];
    let colours =['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
    if(props.bill) {
        const total = Object.keys(props.bill).map(x => {return props.bill[x].cpu}).reduce((a, b) => { a = a + b; return a;})
        let i = 0;
    for(let action in props.bill){
        dt.push({
            label: action,  
            backgroundColor: colours[i],
            borderColor: 'rgb(240, 251, 255)',
            borderWidth: 0,
            data: [props.bill[action].cpu/total]
        })
        i++;
    }
}

    const data = props.bill ? {datasets: dt} : null;


    let options = {
        tooltips: {
            yAlign: 'left',
            position: 'nearest',
            enabled: true,
                callbacks: {
                    label: function(tooltipItems) { 
                        return dt[tooltipItems.datasetIndex].label + ' :' + props.bill[dt[tooltipItems.datasetIndex].label].cpu + 'μs';
                    }
                }
        },
        barThickness: 20,
        legend: {
            display: false
        },
        title: {
            display: false
        },
        data,
        scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    barThickness: 20,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }]
            }
        }




    return (
        <div className="CpuCostContainer">
            {props.bill ? <HorizontalBar data={data} options={options} height={40}/> : null}
            {/* CPU <div key="balContainer" style={StyleContainer}><div style={Style} key="balanceVisual" id="balanceVisual"></div></div> */}
        </div>
    )

}

export default CpuCost;