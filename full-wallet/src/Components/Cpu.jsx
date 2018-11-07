import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';


const Cpu = props => {

    const data = props.cpu ? {
        datasets: [
          {
            label: 'used',  
            backgroundColor: 'rgb(37, 84, 185)',
            data: [props.cpu.used/props.cpu.max]
          },
        //   {
        //     label: 'deployment',  
        //     backgroundColor: 'rgb(199, 7, 0)',
        //     data: [props.deploymentCpu/props.cpu.max]
        //    },
        //   props.bill ? {
        //     label: 'Contract cost estimation',
        //     backgroundColor: 'red',
        //     borderColor: 'green',
        //     borderWidth: 1,
        //     data: [Object.keys(props.bill).map(x => {
        //       return props.bill[x].cpu;
        //   }).reduce((a, b) => { a = a + b
        //   return a;})/props.cpu.max]
        // } : null,
          {
            label: 'available',  
            backgroundColor: 'rgba(37, 84, 185, 0.4)',
            data: [props.cpu.available/props.cpu.max]
          },
   
        ]
      }
      : null;


    let options = {
        tooltips: {
            yAlign: 'left',
            position: 'nearest',
            enabled: false,
            callbacks: {
                label: function(tooltipItems) { 
                    return data.datasets[tooltipItems.datasetIndex].label + ' :' + props.cpu[data.datasets[tooltipItems.datasetIndex].label] + ' μs';
                }
            }
    },
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
        <div className="CpuContainer">
            {props.cpu ? <HorizontalBar data={data} options={options} height={20}/> : null}
            {/* CPU <div key="balContainer" style={StyleContainer}><div style={Style} key="balanceVisual" id="balanceVisual"></div></div> */}
        </div>
    )

}

export default Cpu;