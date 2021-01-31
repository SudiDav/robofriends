import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import  '../App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robot: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res =>  res.json())
            .then(users => this.setState({robot: users}));
    }

    onSearchChange = (e) => {
            this.setState({searchfield: e.target.value})
            
    }

    render(){
        
        const {robot, searchfield } = this.state;
        const filteredRobots = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })  

        // return a h1 loading if the array of robot null or empty!
        return !robot.length ? 
              <h1>Loading!</h1> :      
            (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList 
                        robots={filteredRobots}
                    />
                </Scroll>
            </div>
            );       
        
    }
}

export default App;