import React from 'react'

const SumDzial = (props)=>{


    let newTab = [...props.data]
    let sum=0
    newTab.map(item => sum = (1*item.wynagrodzenieKwota) +sum)
    const dzialy = [];
    // eslint-disable-next-line
    newTab.map(employee => {
    if (!dzialy.find(item => item.dzial === employee.dzial)) {
    dzialy.push({dzial: employee.dzial, suma: 0});
    }
    const istniejaceDzialy = dzialy.find(item => item.dzial === employee.dzial);
    istniejaceDzialy.suma = employee.wynagrodzenieKwota*1 + istniejaceDzialy.suma*1 ;
     
    });

    return(
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
                    <th scope="col">{sum}</th>
                    <th scope="col">{dzialy.map(item => <div>{item.dzial}: {item.suma} </div>)}</th>
                </tr>                 
            </tbody>        
        </table>   
        </div>   
    )
}

export default SumDzial;