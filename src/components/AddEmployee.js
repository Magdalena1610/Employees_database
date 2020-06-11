import React,{Component} from 'react';

class AddEmployee extends Component{

    state ={     
      imie: '',
      nazwisko: '',
      dzial: '',
      wynagrodzenieKwota: '',
      wynagrodzenieWaluta : 'PLN',
    }

    handleAddNewEmp = (e)=>{

        e.preventDefault();
        const {imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta } = this.state;
        this.props.add(imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta)
        this.setState({
          imie: undefined,
          nazwisko:undefined,
          dzial: undefined,
          wynagrodzenieKwota: undefined,
        })
        this.refs.form.reset()
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
      }
    
    render(){
        return(
            <>
            <div>      
            <form  class="row form-group col-md-12" onSubmit={this.handleAddNewEmp} ref="form">
              <div class="input-group">
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.imie} placeholder="Podaj imię..." type="text" name="imie" />
               <input  class="form-control" onChange={this.handleAddInfo} value={this.state.nazwisko} placeholder="Podaj nazwisko..." type="text" name="nazwisko" required/>
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.dzial} placeholder="Podaj dział..." type="text" name="dzial" required/>
               <input class="form-control" onChange={this.handleAddInfo} value={this.state.wynagrodzenieKwota} placeholder="Podaj wynagrodzenie..." type="text" pattern="[0-9.]+" name="wynagrodzenie" required/>
               <button type="submit" class="btn btn-outline-info" >Dodaj pracownika</button>
               </div>
               </form>
           </div>
            </>
        )
    }
}

export default AddEmployee;