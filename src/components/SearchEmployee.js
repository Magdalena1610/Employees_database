import React from 'react'
import EmployeesContainer from './EmployeesContainer';
import ViewEmployees from './ViewEmployees';

class SearchEmployee extends React.Component{

    state ={
        checkboxes: [],
        value:'',
        valueOd : '',
        valueDo :'',
    }
    handleRangeOd = (e)=>{
        this.setState({
            valueOd : e.target.value 
        })
    }
    handleRangeDo = (e)=>{
        this.setState({
            valueDo : e.target.value
        })
    }

    handleOnChange=(e)=>{

        this.setState({
            value: e.target.value,
        })
    }
 
    chceckchecker = (value) =>{
        let checkBoxx = [];
        let checkBoxesTrue = [...this.state.checkboxes];
        checkBoxesTrue.forEach(checkbox => (checkbox.isChecked && checkBoxx.push(checkbox.dzial.toLowerCase()) ))
        return checkBoxx.indexOf( value ) > -1;
    
    }

    dynamicSearch = (e)=>{ 

        const employees = this.props.items;
        const {valueDo, valueOd} = this.state
        let checkBoxx = [];
        let checkBoxesTrue = [...this.state.checkboxes];
        checkBoxesTrue.forEach(checkbox => (checkbox.isChecked && checkBoxx.push(checkbox.dzial.toLowerCase()) ))
        
     
        let ifCheckbox = checkBoxx.length > 0
        let ifValueOD = valueOd !== ''
        let ifValueDO = valueDo !== ''

        console.log(ifCheckbox, ifValueDO, ifValueOD)

        if (ifCheckbox && ifValueDO && ifValueOD) {
            return employees.filter(employee =>      
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && this.chceckchecker(employee.dzial.toLowerCase()) 
                && employee.wynagrodzenieKwota*1 >=valueOd*1
                && employee.wynagrodzenieKwota*1 <= valueDo*1 
                 )
        }else if(ifCheckbox && ifValueDO && !ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && this.chceckchecker(employee.dzial.toLowerCase()) 
                && employee.wynagrodzenieKwota*1 <= valueDo*1 
                 )
        }else if(ifCheckbox && !ifValueDO && ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && this.chceckchecker(employee.dzial.toLowerCase()) 
                && employee.wynagrodzenieKwota*1 >=valueOd*1
                 )
        }else if(ifCheckbox && !ifValueDO && !ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && this.chceckchecker(employee.dzial.toLowerCase()) 
                 )
        }else if(!ifCheckbox && ifValueDO && ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && employee.wynagrodzenieKwota*1 >=valueOd*1
                && employee.wynagrodzenieKwota*1 <= valueDo*1 
                 )
        }else if(!ifCheckbox && ifValueDO && !ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && employee.wynagrodzenieKwota*1 <= valueDo*1 
                 )
        }else if(!ifCheckbox && !ifValueDO && ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                && employee.wynagrodzenieKwota*1 >=valueOd*1
                 )
        }else if(!ifCheckbox && !ifValueDO && !ifValueOD){
            console.log(valueDo, valueOd)
            return employees.filter(employee => 
                employee.imie.toLowerCase().includes(this.state.value.toLowerCase())
                  )
        }


        
    }


    handleChecked = (e)=>{
   
            let checkboxes = [...this.state.checkboxes]
            let index = checkboxes.findIndex(item => item.dzial === e.target.name)
           
            checkboxes[index].isChecked = !checkboxes[index].isChecked

            this.setState({
                checkboxes
            })       
    }


    sectionEmployees = ()=>{
        
        this.props.items.forEach(section => {
            // console.log('sekcja '+section.dzial)

            if (!this.state.checkboxes.find(item => item.dzial === section.dzial)) {
                this.state.checkboxes.push({dzial: section.dzial, isChecked: false});
            }

            // if (section.dzial && !this.state.checkboxes.includes(section.dzial)) {
            //     this.state.checkboxes.push({dzial: section.dzial, isChecked: false})
            // }
        })
      
        return this.state.checkboxes.map(section => <div>{section.dzial} <input type="checkbox" onChange={this.handleChecked} name={section.dzial}/></div> )
    }
    
    render(){

        return(
           <>
            <input type="text" placeholder="Search" onChange={this.handleOnChange} value={this.state.value}/>
            {this.sectionEmployees()}
            Od: <input value={this.state.valueOd} onChange={this.handleRangeOd} placeholder="Kwota od..." type="number" name="od"/> 
            Do: <input value={this.state.valueDo} onChange={this.handleRangeDo} placeholder="Kwota do..." type="number" name="do"/>
            <ViewEmployees names={this.dynamicSearch()}/>
            <br/>
           </>
        )
    }
    
}

export default SearchEmployee;





