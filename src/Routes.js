import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dog from './Dog';
import DogList from './DogList';

class Routes extends Component {
    render() {
        const getDog= props => {
            let name = props.match.params.name;
            let currentDog= this.props.dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
            if(currentDog !== undefined) {
                return <Dog {...props} dog={currentDog} /> ;
              } else{
                return <Redirect to="/dogs" />
              }
          }
        return (
            <Switch>
                <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />} />
                <Route exact path='/dogs/:name/' render={getDog} />
                <Redirect to='/dogs'/>
            </Switch>
        )
    }
}

export default Routes