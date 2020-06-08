import React,{Component} from 'react';
import '../App.css';

import SumDzial from './SumDzial';
import SearchSection from './SearchSection';
import SearchEmployee from './SearchEmployee';
import ViewEmployees from './ViewEmployees';
class App extends Component{

  state = { 
    employees : [
      {imie: "Jan", nazwisko: "Kowalski", dzial: "IT", wynagrodzenieKwota: 3000, wynagrodzenieWaluta: "PLN"},
      {imie: "Anna", nazwisko: "Bąk", dzial: "Administracja", wynagrodzenieKwota: 2400.50, wynagrodzenieWaluta: "PLN"},
      {imie: "Paweł", nazwisko: "Zabłocki", dzial: "IT", wynagrodzenieKwota: 3300, wynagrodzenieWaluta: "PLN"},
      {imie: "Tomasz", nazwisko: "Osiecki", dzial: "Administracja", wynagrodzenieKwota: 2100, wynagrodzenieWaluta: "PLN"},
      {imie: "Iwona", nazwisko: "Leihs-Gutowska", dzial: "Handlowiec", wynagrodzenieKwota: 3100, wynagrodzenieWaluta: "PLN"}
    ],
      imie: '',
      nazwisko: '',
      dzial: '',
      wynagrodzenieKwota: '',
      wynagrodzenieWaluta : '',}


  

 
  handleAddNewEmp = ()=>{
    let employees = [...this.state.employees]
    employees.push({
      imie: this.state.imie,
      nazwisko :this.state.nazwisko,
      dzial: this.state.dzial,
      wynagrodzenieKwota: this.state.wynagrodzenieKwota,
      wynagrodzenieWaluta : this.state.wynagrodzenieWaluta,
    })
    this.setState({
      employees,
      imie:'',
      nazwisko:'',
      dzial: '',
      wynagrodzenieKwota: '',
      wynagrodzenieWaluta : '',
    })
    
  }

  handleAddInfo = (e)=>{
 
    if(e.target.name === "imie" && e.target.value !== ''){
      
      this.setState({
        imie : e.target.value
      })
    }
    if(e.target.name === "nazwisko" && e.target.value !== ''){
      this.setState({
        nazwisko : e.target.value
      })
    }
    if(e.target.name === "dzial" && e.target.value !== ''){
      this.setState({
        dzial : e.target.value
      })
    }
    if(e.target.name === "wynagrodzenie" && e.target.value !== ''){
      this.setState({
        wynagrodzenieKwota : e.target.value
      })
    }
    if(e.target.name === "waluta" && e.target.value !== ''){
      this.setState({
        wynagrodzenieWaluta : e.target.value
      })
    }
  }

  render(){
   // const tab = this.state.employees.map(employee=> <ViewEmployees {...employee} />)
    const newEmp = [...this.state.employees]
    let sum=0
    this.state.employees.map(item => sum = (1*item.wynagrodzenieKwota) +sum)
    
      
    return(
      <>
          <div>
               <input onChange={this.handleAddInfo} value={this.state.imie} placeholder="Podaj imię..." type="text" name="imie"/><br/>
               <input onChange={this.handleAddInfo} value={this.state.nazwisko} placeholder="Podaj nazwisko..." type="text" name="nazwisko"/><br/>
               <input onChange={this.handleAddInfo} value={this.state.dzial} placeholder="Podaj dział..." type="text" name="dzial"/><br/>
               <input onChange={this.handleAddInfo} value={this.state.wynagrodzenieKwota} placeholder="Podaj wynagrodzenie..." type="number" name="wynagrodzenie"/><br/>
               <input onChange={this.handleAddInfo} value={this.state.wynagrodzenieWaluta} placeholder="Podaj walutę..." type="text" name="waluta"/><br/>
               <button onClick={this.handleAddNewEmp}>Dodaj pracownika</button>
           </div>
           <div>
          
        <SearchEmployee items={newEmp}/> 
        
        </div>
        
        <div>
             Suma wszystkich wynagrodzeń: {sum} <br/>
             <SumDzial data={newEmp}/>
        </div><br/>
        
      </>
    )
  }

}

export default App;
