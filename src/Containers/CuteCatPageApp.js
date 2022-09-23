import React from "react";
//* we can use `import React, { Component } from "react";` then in the class instead of React.Component we can write Component.
import CardList from '../Components/Cat_Card_List';
// import { robots } from './robots';
import SearchBox from "../Components/searchBox";
import Scrolle from "../Components/Scrolle";
import ErrorBoundry from "../Components/ErrorBoundry";

//* To use STATES a class should be used not a function!

class CatApp extends React.Component {
    constructor() { //* built in React
        super()
        this.state = {
            cats: [],
            searchField: ""
        }
    }

    componentDidMount() { //*built in React
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ cats: users }))
    }

    //! in the following if it was "onSearchChange(event){...}" the value of "this" would refer to searchBox file because we pass it to that function in "searchChange" so we have always to use "functionName = () =>" structure
    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { cats, searchField } = this.state; //* Using destructuring

        const findTheCat = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase());
        })

        // console.log(findTheCat)
        // if (!cats.length) { //* instead of "cats.length === 0"
        //     return <h1>Loading</h1>
        // }

        return (!cats.length) ?
            <h1>Loading</h1> :
            (
                <div className="tc" >
                    <h1 className="f1">Cool kitties</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scrolle>
                        <ErrorBoundry>
                            <CardList robots={findTheCat} />
                        </ErrorBoundry>
                    </Scrolle>
                </div>
            );

    }
}

export default CatApp;


//* PROPS
//* STATE
//* CHILDREN