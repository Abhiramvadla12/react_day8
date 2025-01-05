import { Component } from 'react'

export default class LCC_unmount extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 1
        }
        console.log("constructor phase ");
        this.intervalId = null;
    }


    componentDidMount(){
        console.log("this did mount phase")
        this.intervalId =  setInterval(()=>{
            this.setState((prevState) => ({
                name: prevState.name + 1
            }));
        },1000);
    }

    componentWillUnmount(){
            console.log("This is unmount phase");
            clearInterval(this.intervalId);//clean function
    }

  render() {
    console.log("render",this.intervalId);
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    )
  }
}
