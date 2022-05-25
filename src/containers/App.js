import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfield:'',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{return response.json()})
        .then((data) =>{
            this.setState({robots:data})
        });
    }
    onsearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1 className='tc'>Loading...</h1>
        } else{
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onsearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
                )
        }
        
    }
    
}

export default App;