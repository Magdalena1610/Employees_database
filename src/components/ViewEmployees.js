import React from 'react';
import SumDzial from './SumDzial'



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
        <div class="table-responsive rounded" style={{paddingBottom: '10px', paddingTop: '20px'}}>
        <table class="table table-bordered table-striped ">
            <thead class="p-3 mb-2 bg-secondary text-white">
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
        </div>
        <SumDzial data={props.names}/>
        </>
    )
}

export default ViewEmployees;