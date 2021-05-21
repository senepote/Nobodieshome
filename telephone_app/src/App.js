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
// ==========ADDING NEW CONTACT========
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
// ==========closes addNewContact==========
    }

// ===========DELETING ENTRY=============

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
            <input type="number"
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

      <div className="sideBar">
      <div className="left">
        <h1 className="title">P</h1>
        <h1 className="title">H</h1>
        <h1 className="title">O</h1>
        <h1 className="title">N</h1>
        <h1 className="title">E</h1>
      </div>

      <div className="right">
        <h1 className="title">B</h1>
        <h1 className="title">O</h1>
        <h1 className="title">O</h1>
        <h1 className="title">K</h1>
        <h1 className="title">.</h1>
      </div>
      </div>

      <div className="App">

      <span style={{
        cursor:"pointer",
        color:"#ff33cc"
        }}
          onClick={this.toggleForm}>Add a New Contact
        </span>

          {form}

          {this.state.phoneBook.map(contact =>
            <div className="contacts">
              <h3>{contact.name}</h3>
              <div></div>
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
