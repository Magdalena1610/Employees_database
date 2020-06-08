import React from 'react'

const SumDzial = (props)=>{


    let newTab = [...props.data]
 
    //newTab.forEach(item => {if (item.dzial && !tab.includes(item.dzial)) tab.push(item.dzial)})
    const departments = [];

    newTab.map(employee => {
    if (!departments.find(item => item.dzial === employee.dzial)) {
    departments.push({dzial: employee.dzial, suma: 0});
    }
    const existingDepartment = departments.find(item => item.dzial === employee.dzial);
  
     existingDepartment.suma = employee.wynagrodzenieKwota*1 + existingDepartment.suma*1 ;
     
    });

    return(
        <>
        {departments.map(item => <div>{item.dzial} {item.suma} </div>)}
        </>   
    )
}

export default SumDzial;