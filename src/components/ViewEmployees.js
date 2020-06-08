import React from 'react';
import '../ViewEmployees.css';



const ViewEmployees = (props)=>{

    const {imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta} = props.names;
    const tab= props.names.map(name => 
    <tr >
        <td>
        {name.imie}
        </td>
        <td>
            {name.nazwisko}
        </td>
        <td>
            {name.dzial}
        </td>
        <td>
            {name.wynagrodzenieKwota} {wynagrodzenieWaluta}
        </td>            
    </tr>)
    
    return(
        <>
            {tab}
            
        </>
    )
}

export default ViewEmployees;