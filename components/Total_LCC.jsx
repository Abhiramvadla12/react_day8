import  { Component } from 'react'

export default class Total_LCC extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : null,
            counter : 1,
            loading:true

        }
        console.log("constructor phase");
    }

    //mounting phase 
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps phase")
        return null
    }

    componentDidMount(){
            console.log("This did mount phase")
            fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res)=> res.json())
            .then((data)=> this.setState(()=> ({ data:data,loading:false})))
            .catch((err)=> console.error("error",err))
    }

    //updaing phase

    shouldComponentUpdate(nextProps,nextState){
            console.log("should update phase",nextProps,nextState);
            return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState,snapshot){
        console.log("get snapshot before update",prevProps,prevState,snapshot)
        return prevState.counter
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("did update phase ",prevProps,prevState,snapshot);
        if(prevState.counter !== this.state.counter){
            console.log("counter changed ")
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`)
            .then((res)=> res.json())
            .then((data)=> this.setState(()=> ({ data:data,loading:false})))
            .catch((err)=> console.error("error",err))
            
        }
    }

    //unmount phase 

    componentWillUnmount(){
        console.log("unmount phase");

    }

    handleIncrement = () => {
        this.setState((prevState)=>
        (
            {
                counter : prevState.counter + 1
            }
        )
        )
    }
  render() {
    const {loading,counter,data} = this.state 
    return (
      <>
        <div>
            <h1>Total life cycle method componet</h1>
            {
                loading ? <p>Loading......</p>
                :
                <p>Data : {data ?.title}</p>
            }
            <p>Counter : {counter}</p>
            <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </>
    )
  }
}
