import react,{Component} from 'react';

class App extends Component {
  state = {
    hello : 'hello react app!',
    num : 0
  };

  change_word = () =>{
    this.setState({
      hello: this.props.message
    });
  };

  increase_num = () =>{
    this.setState({
      num : this.state.num + 1,
    })
  };

  render(){
    return (
      <div className="App">
        <h3>Change Word</h3>
        <div>
          <span>{this.state.hello}</span>
          <button onClick={this.change_word}>click to change the word!!</button>
        </div>
        
        <h3>Increase Num</h3>
        <div>
          <span>{this.state.num}</span>
          <button onClick={this.increase_num}>click to increase the num!! </button>
        </div>
        
        <h3>Increase Num2</h3>
        <div>
          <InsideApp
            num = {this.state.num}
            increase_num = {this.increase_num}
          />
        </div>
      </div>
    );
  }
  
}
class InsideApp extends Component{
  render(){
    return(
      <div>
        <span>{this.props.num}</span>
        <button onClick={this.props.increase_num}>click to increase the num!! </button>
      </div>
    );
  }
}

export default App;
