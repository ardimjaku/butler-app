import React, { Component } from 'react'

import axios from 'axios'
import Select from 'react-select'


export default class select extends Component {

  constructor(props){
    super(props)
    this.state = {
      dropDownOpt : [],
      id: "",
      name: ''
    }
  }

 async renderData(){
    const API = await axios.get('/api/item')
    const serverResponse = API.data
    const result = serverResponse.Items;

    const dropDownValue = result.map((response) => ({
      "value" : response.id,
      "label" : response.name
    }))

    this.setState(
      {
        dropDownOpt: dropDownValue
      }
    )

  }

  onChange(event){
   this.setState(
     {
       id: event.value, 
       name: event.label
      }
    )
  }

  componentDidMount(){
      this.renderData()
  }

  render() {
    return (
      <div className="App">
        <Select 
           name="items"
           options={this.state.dropDownOpt} 
           onChange={this.onChange.bind(this)}
           isMulti
        />
      </div>
    )
  }
}