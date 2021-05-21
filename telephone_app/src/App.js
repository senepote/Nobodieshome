import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(){
        super();

    this.state={
      name:"",
      number:"",
      phoneBook:[
        {name: "Lady Gaga", number: "+8668590011"}
                  ],
      showForm:false
    }

    this.nameInput=(event)=>{
      this.setState({
        name:event.target.value
      })
    }

    this.numberInput=(event)=>{
      this.setState({
        number:event.target.value
      })
    }

    this.addNewContact=()=>{

      const newContact={
        name:this.state.name,
        number:this.state.number
      }

      if(this.state.name==="" || this.state.number==="")
      {
        alert('Please fill out all the fields.');
        return;
      }

      this.setState( (prevState)=>({
        phoneBook:prevState.phoneBook.concat(newContact),
          name:"",
          number:""
      }))
// closes addNewContact
    }

    this.toggleForm=()=>{
      this.setState(
        {showForm: !this.state.showForm}
      )
    }
    // constructor close
  }

// renders into HTML
  render() {

// toggles form open and closed
    let form=null;
    if(this.state.showForm)
    {
      form=
      (
        <div className="container">

        <form className="form">
          <div className="form-group">
            <input type="text"
            className="form-control"
            onChange={this.nameInput}
            value={this.state.name}
            placeholder="Name" />
          </div>

          <div className="form-group">
            <input type="text"
            className="form-control"
            onChange={this.numberInput}
            value={this.state.number}
            placeholder="Number" />
          </div>
          <button type="button"
          className="addButton"
          onClick={this.addNewContact}>Add Contact</button>
        </form>

        </div>
      )
    }

// ==========RETURNS THE DATE INTO HTML STRUCTURE FOR INDEX======
  return (
      <div className="main-container">

        <div className="App">
        <h1 className="title">Phone Book</h1>
        <span style={{
          cursor:"pointer",
          color:"hotpink"
          }}
          onClick={this.toggleForm}>Add a New Contact</span>

          {form}

          {this.state.phoneBook.map(contact =>
            <div className="contacts">
              <h3>{contact.name}</h3>
              <h5>{contact.number}</h5>
            </div>
          )}
          </div>
      </div>
// =====CLOSES RETURN======
  );

// ===================CLOSES RENDER======================
  }


// ====================CLOSES COMPONENT=======================
}
export default App;
