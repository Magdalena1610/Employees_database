import React from 'react'
import EmployeeName from './EmployeeName';

const EmployeesContainer = (props)=>{
   
    
    
    return(
        <div>
          {props.names.map(name => <EmployeeName name={name}/>)} 
        </div>
    )
}

export default EmployeesContainer;