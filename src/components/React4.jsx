import React, { Component } from 'react'
import './style.css'


 class React4 extends Component {

  state = { name: "",
  mail: "",
  password: ""
 };



  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  }
  isActive=()=>{
    this.setState({check:!this.state.check})

  }




  render() {
    console.log(this.state)
    return (
    <div className="general">
     <label htmlFor="name">Name:
       <input
       value ={this.state.name}
          id="name"
name="name" 
onChange={this.handleChange}/>
          <button onClick={()=> {this.setState({name:""})}}>X</button>
     </label> 


      <label htmlFor="mail">Mail:
      <input
      value ={this.state.mail}
         id="mail"
         name="mail"
         onChange={this.handleChange}/>
         <button onClick={()=> {this.setState({mail:""})}}>X</button>
    </label> 


     <label htmlFor="password">Password:
     <input
     value ={this.state.password}
        id="password"
        name="password"
        type={this.state.check?"text":"password"}
        onChange={this.handleChange}/>
        <button onClick={()=> {this.setState({password:""})}}>X</button>
   </label> 

<label> <span>Show password</span>
<input 
type="checkbox"
checked = {this.state.isActive}
onClick = {this.isActive}
/>
</label>
  
   </div>
 ) }
 }
 export default React4