import { Component } from 'react'

export class Classes extends Component {
   constructor(props){
      super(props)
      this.state ={count: 0}
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick(){
      this.setState((state)=>({count: state.count+1}))
   }
   componentDidMount(){
      console.log("Component is mounted")
   }
   componentDidUpdate(){
      console.log("Component is updated")
   }
  render() {
   console.log("object rendered")
    return (
      <div>
         <h1>{this.state.count}</h1>
         <button onClick={this.handleClick}>Count</button>
      </div>
    )
  }
}

export default Classes