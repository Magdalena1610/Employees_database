import React from 'react';


class SearchSection extends React.Component{

    state ={
        checkboxes: []
    }

    handleChecked = (e)=>{

        console.log(e.target.name)
        console.log(e.target.checked)
        
            
            let checkboxes = [...this.state.checkboxes]
            let index = checkboxes.findIndex(item => item.dzial === e.target.name)
           
            console.log('to ten '+index)
            checkboxes[index].isChecked = true

            this.setState({
                checkboxes
            })
           
        // console.log(this.state.isChecked)

        // let tab =[];
        // this.props.sections.forEach(section => {
        //     if (section.dzial && !tab.includes(section.dzial)) {
        //         tab.push(section.dzial)   
        //     }
        // })
        // this.setState({
        //     dzial: e.target.name
        // })
        // tab.map(item =>{
        //     if(item === e.target.name){
                
        //         console.log(item)
        //     }
        //     console.log(e.target.name)
        // })

        
    }
 

    sectionEmployees = ()=>{
        
        this.props.sections.forEach(section => {
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
        {this.sectionEmployees()}
        </>
    )}
}

export default SearchSection;