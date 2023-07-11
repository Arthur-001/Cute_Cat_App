import React, { useState, useEffect } from "react";
//* we can use `import React, { Component } from "react";` then in the class instead of React.Component we can write Component.
import CardList from '../Components/Cat_Card_List';
// import { cats } from './cats';
import SearchBox from "../Components/searchBox";
import Scrolle from "../Components/Scrolle";
import ErrorBoundry from "../Components/ErrorBoundry";

//! using HOOKS
function CatApp() {

    const [cats, setCats] = useState([]) //! This is called ** array destructuring **. `cats` (state) and `setCats` (function that changes the state) are returned by useState. first one is the name of state, here is `cats, and second one is a function that could have any name to change our state. inside `useState()` we give the initial state of cats which is an empty array
    const [searchField, setSearchField] = useState('')

    //! instead of using React Lifecycle methods like `componentDidMount()`. We now use Hooks. `useEffect` gets run whenever `CatApp` gets run automatically. NOTE: `useEffect` recieves a second parameter which is an array. whenever we are changing an state isnide of useEffenct by default it runs indefinitely so we have to tell it when to fetch. For example we could use `[searchField]` that means fetch whenever `searchField` is changed. By using an empty [] we say fetch just once
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setCats(users))
    }, [])

    const onSearchChange = (event) => { //! Now `onSearchChange` is a constant variable function! In classes we don't use `Const`
        setSearchField(event.target.value) //! `this.setState` changed to `setSearchField`
    }

    const findTheCat = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (!cats.length) ?
        <h1>Loading</h1> :
        (
            <div className="tc" >
                <h1 className="f1">Cool kitties</h1>
                <SearchBox searchChange={onSearchChange} /> {/* `this` keyword has been removed because we are no longer in aClass.*/}
                <Scrolle>
                    <ErrorBoundry>
                        <CardList cats={findTheCat} />
                    </ErrorBoundry>
                </Scrolle>
            </div>
        );

}


//! using CLASS
//* To use STATES a class should be used not a function!
// class CatApp extends React.Component {    
//     constructor() { //* built in React
//         super()
//         this.state = {
//             cats: [],
//             searchField: ""
//         }
//     }

//     componentDidMount() { //*built in React
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => this.setState({ cats: users }))
//     }

//     //! in the following if it was "onSearchChange(event){...}" the value of "this" would refer to searchBox file because we pass it to that function in "searchChange" so we have always to use "functionName = () =>" structure
//     onSearchChange = (event) => {
//         // console.log(event.target.value)
//         this.setState({ searchField: event.target.value })
//     }

//     render() {
//         const { cats, searchField } = this.state; //* Using destructuring

//         const findTheCat = cats.filter(cat => {
//             return cat.name.toLowerCase().includes(searchField.toLowerCase());
//         })

//         // console.log(findTheCat)
//         // if (!cats.length) { //* instead of "cats.length === 0"
//         //     return <h1>Loading</h1>
//         // }

//         return (!cats.length) ?
//             <h1>Loading</h1> :
//             (
//                 <div className="tc" >
//                     <h1 className="f1">Cool kitties</h1>
//                     <SearchBox searchChange={this.onSearchChange} />
//                     <Scrolle>
//                         <ErrorBoundry>
//                             <CardList cats={findTheCat} />
//                         </ErrorBoundry>
//                     </Scrolle>
//                 </div>
//             );

//     }
// }

export default CatApp;


//* PROPS
//* STATE
//* CHILDREN