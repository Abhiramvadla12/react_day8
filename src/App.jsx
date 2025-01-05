

import './App.css'
import LCC_mount from '../components/LCC_mount'
import LCC_update from '../components/LCC_update'
import LCC_unmount from '../components/LCC_unmount'
import Total_LCC from '../components/Total_LCC'

import { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showChild : true
    }
  }

  toggleChild = ()=>{
    this.setState((prevState)=>({
        showChild : !prevState.showChild
    })
    )
  }
  render() {
    return (
      <>
        {/* <LCC_mount /> */}
        {/* <LCC_update /> */}
        {/* <LCC_unmount /> */}
        <button onClick={this.toggleChild}>
          {
            this.state.showChild ? "unmount":"mount"
          }
        </button>
        {this.state.showChild && <Total_LCC />}
      </>
    )
  }
}
