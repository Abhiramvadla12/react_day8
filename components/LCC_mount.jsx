import  { Component } from 'react'

export default class LCC_mount extends Component {
    //mounting phase
    //mounting has four phases like constructor, getDerivedStateFromProps, render(),componentDidMount()
    constructor(props){
        super(props)
        this.state ={
            HeroName : "Abhiram"
        }
        console.log("constructor phase");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps phase",props,state);
        return null
    }


    componentDidMount(){
        console.log("componentDidMount phase");
        // this.setState({HeroName:"Monarch"})
    }


  render() {
    console.log("render phase");
    return (
      <>
        <div>
            <h1>{this.state.HeroName}</h1>
            <button onClick={()=>{
                this.setState({HeroName:"Monarch"})
            }}>Click here update the state</button>
        </div>
      </>
    )
  }
}
