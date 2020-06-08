import React from 'react'

const SumDzial = (props)=>{


    let newTab = [...props.data]
    let sum=0
    newTab.map(item => sum = (1*item.wynagrodzenieKwota) +sum)
    const dzialy = [];

    newTab.map(employee => {
    if (!dzialy.find(item => item.dzial === employee.dzial)) {
    dzialy.push({dzial: employee.dzial, suma: 0});
    }
    const istniejaceDzialy = dzialy.find(item => item.dzial === employee.dzial);
    istniejaceDzialy.suma = employee.wynagrodzenieKwota*1 + istniejaceDzialy.suma*1 ;
     
    });

    return(
        <div>
        Suma całkowita wszystkich wynagrodzeń:{sum}
        {dzialy.map(item => <div>{item.dzial} {item.suma} </div>)}
        </div>   
    )
}

export default SumDzial;