import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

function thousandsSeperator(x) {
    x = x.toFixed(2);
    return "$ "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Charts = () =>{
    let vals = useSelector((state)=>state.data.sales)
    useEffect(()=>{},[vals])
    console.log(vals)
    const retail = [];
    const wholesale = [];
    const dates = []
    vals.forEach(function(elem){
        retail.push(elem.retailSales) ;
        wholesale.push(elem.wholesaleSales);
        dates.push(elem.weekEnding)
    })
    console.log(retail,wholesale,dates)
    const options = {
        chart: {
            height:'300px',
            type: 'spline',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        title: {
            text: 'Retail Sales',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function() {
                  return Highcharts.dateFormat("");
                }
              }
        },

        

        credits: {
            enabled: false
          },
        yAxis: {
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
        },
        tooltip: {
            backgroundColor: '#FFFFF',
            
            useHTML: true,
            formatter: function(){
                var point = this.point;
                var text = '<span>'+thousandsSeperator(point.y)+'</span>'
                return text
            },
            style:{
                color:'#FFFFFF',
                fontSize: '12px'    
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            name:'Retail',
            data:retail
        },
        {
            name:'WholeSale',
            data:wholesale
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    }
    return (
        <div>
            <HighchartsReact highcharts = {Highcharts} options={options} />
        </div>
    )
}

export default Charts

