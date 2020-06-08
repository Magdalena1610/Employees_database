import React from 'react';
import '../ViewEmployees.css';



const ViewEmployees = (props)=>{

    const tab= props.names.map(name => 
   <tr>
    <td>{name.imie}</td>
    <td>{name.nazwisko}</td>
    <td>{name.dzial}</td>
    <td>{name.wynagrodzenieKwota} {name.wynagrodzenieWaluta}</td>
    </tr>
 
    )
    
    return(
        <>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Dział</th>
                    <th scope="col">Wynagrodzenie</th>
                </tr>
            </thead>
            <tbody> 
                {tab}
            </tbody>
        </table> 
        </>
    )
}

export default ViewEmployees;