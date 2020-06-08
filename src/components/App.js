import React,{Component} from 'react';


import SumDzial from './SumDzial';
import SearchEmployee from './SearchEmployee';

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
 
    if(e.target.name === "imie"){
      
      this.setState({
        imie : e.target.value
      })
    }
    if(e.target.name === "nazwisko"){
      this.setState({
        nazwisko : e.target.value
      })
    }
    if(e.target.name === "dzial"){
      this.setState({
        dzial : e.target.value
      })
    }
    if(e.target.name === "wynagrodzenie"){
      this.setState({
        wynagrodzenieKwota : e.target.value
      })
    }
    if(e.target.name === "waluta"){
      this.setState({
        wynagrodzenieWaluta : e.target.value
      })
    }
  }

  render(){
    const newEmp = [...this.state.employees]
      
    return(
      <>
      <div class="jumbotron row justify-content-center">
              <h2>Zadanie rekrutacyjne</h2>
            </div>
          <div class="jumbotron">      
            <div class=" row input-group col-md-12">
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.imie} placeholder="Podaj imię..." type="text" name="imie"/><br/>
               <input  class="form-control" onChange={this.handleAddInfo} value={this.state.nazwisko} placeholder="Podaj nazwisko..." type="text" name="nazwisko"/><br/>
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.dzial} placeholder="Podaj dział..." type="text" name="dzial"/><br/>
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.wynagrodzenieKwota} placeholder="Podaj wynagrodzenie..." type="text" pattern="[0-9.]+" name="wynagrodzenie"/><br/>
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.wynagrodzenieWaluta} placeholder="Podaj walutę..." type="text" name="waluta"/><br/>
               <button type="button" class="btn btn-outline-info" onClick={this.handleAddNewEmp}>Dodaj pracownika</button>
               </div>
           </div>
           <div>
          <SearchEmployee items={newEmp}/>  
          </div>  
        <div class="jumbotron">
            <SumDzial data={newEmp}/>
        </div>  
      </>
    )
  }

}

export default App;
