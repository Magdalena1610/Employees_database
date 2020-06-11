import React from 'react';
import {Pie} from 'react-chartjs-2';

const SumDzial = (props)=>{


    let newTab = [...props.data]
    let sum=0
    newTab.map(item => sum = (1*item.wynagrodzenieKwota) +sum)
    const dzialy = [];
    const chartSum = [];
    const chartDzial = [];
    const chartColors = [];
    // eslint-disable-next-line
    newTab.map(employee => {
        
    if (!dzialy.find(item => item.dzial === employee.dzial)) {
    dzialy.push({dzial: employee.dzial, suma: 0});
    }
    
    const istniejaceDzialy = dzialy.find(item => item.dzial === employee.dzial);
    istniejaceDzialy.suma = employee.wynagrodzenieKwota*1 + istniejaceDzialy.suma*1 ;
     
    });
    dzialy.map(item => chartSum.push(item.suma))
    dzialy.map(item=>chartDzial.push(item.dzial))
    dzialy.map(item => chartColors.push("#" +Math.floor(Math.random()*16777215).toString(16)))
    console.log(chartColors)

    

    return(
        <>
        <div>
            <table class="table table-bordered table-striped ">
            <thead class="p-3 mb-2 bg-info text-white rounded-lg">
                <tr>
                    <th scope="mb-3">Suma wszystkich wynagrodzeń:</th>
                    <th scope="col">Suma względem działu:</th>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <th scope="col">{sum} PLN</th>
                    <th scope="col">{dzialy.map(item => <div>{item.dzial}: {item.suma} PLN </div>)}</th>
                </tr>                 
            </tbody>        
        </table>  
        </div> 
        <div>
        <Pie data={{labels: chartDzial,
            datasets: [{
                data: chartSum,
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors
            }]}} /> 
            </div> 
            </>
    )
}

export default SumDzial;