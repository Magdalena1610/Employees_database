import React,{Component} from 'react';
import SearchEmployee from './SearchEmployee';
import AddEmployee from './AddEmployee';

class App extends Component{

  state = { 
    employees : [
      {imie: "Jan", nazwisko: "Kowalski", dzial: "IT", wynagrodzenieKwota: 3000, wynagrodzenieWaluta: "PLN"},
      {imie: "Anna", nazwisko: "Bąk", dzial: "Administracja", wynagrodzenieKwota: 2400.50, wynagrodzenieWaluta: "PLN"},
      {imie: "Paweł", nazwisko: "Zabłocki", dzial: "IT", wynagrodzenieKwota: 3300, wynagrodzenieWaluta: "PLN"},
      {imie: "Tomasz", nazwisko: "Osiecki", dzial: "Administracja", wynagrodzenieKwota: 2100, wynagrodzenieWaluta: "PLN"},
      {imie: "Iwona", nazwisko: "Leihs-Gutowska", dzial: "Handlowiec", wynagrodzenieKwota: 3100, wynagrodzenieWaluta: "PLN"}
    ]}

    addEmployee = (imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta )=>{ 

     const employee = {
       imie,
       nazwisko,
       dzial, 
       wynagrodzenieKwota,
       wynagrodzenieWaluta,
     }
     const employees = [...this.state.employees];
     employees.push(employee);
     console.log(employees)
 
     this.setState({
      employees,
     })

 }

 
  render(){
    const newEmp = [...this.state.employees]
      
    return(
      <>
      <div class="jumbotron row justify-content-center">
              <h2>Zadanie rekrutacyjne</h2>
            </div>
            <AddEmployee add={this.addEmployee}/>
           <div>
            <SearchEmployee items={newEmp}/>  
          </div> 
      </>
    )
  }

}

export default App;
