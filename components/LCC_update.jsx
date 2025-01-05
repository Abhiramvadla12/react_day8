import  { Component } from 'react'

export default class LCC_update extends Component {
    //updating phase in which has five phase like constructor, getDerviedstateFromProps, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate 
    constructor(props){
        super(props)
        this.state = {
            name: "Abhiram"
        }
        console.log("constructor phase ")
    }


    static getDerivedStateFromProps(props,state){
        console.log("gdsfp phase",props,state);
        return null
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("scu phase",nextProps,nextState);
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState,snapshot){
        console.log("gsbu phase",prevProps,prevState,snapshot);
        return null
    }

    componentDidMount(){
      console.log("mount phase");
      this.setState({name:"Monarch"});
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('cdu phase ',prevProps,prevState,snapshot);
        // this.setState({name:"Monarch "})
    }
  render() {
    console.log("render phase");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
