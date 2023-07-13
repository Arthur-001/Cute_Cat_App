import React, { useEffect } from "react"; //! useStaet is not needed anymore
import CardList from '../Components/Cat_Card_List';
import SearchBox from "../Components/searchBox";
import Scrolle from "../Components/Scrolle";
import ErrorBoundry from "../Components/ErrorBoundry";

import { setSearchField, requestCats } from "../actions";
import { connect } from "react-redux"; //! Libraries to use Redux

const mapStateToProps = (state) => {
    return {
        searchField: state.searchCats.searchField, //! searchField is comming from actions.js file
        cats: state.requestCats.cats,
        isPending: state.requestCats.isPending,
        error: state.requestCats.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestCats: () => dispatch(requestCats())
    }
}

function CatApp({ searchField, onSearchChange, onRequestCats, cats, isPending }) {
    
    // const [cats, setCats] = useState([]) 
    // const [searchField, setSearchField] = useState('') //! With redux we don't need states for each file anymore it is commming as a props

    useEffect(() => {
        // console.log(store.getState())
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => setCats(users))
        onRequestCats()
    }, [])


    // const onSearchChange = (event) => { //! onSearchChange now comes as props
    //     setSearchField(event.target.value)
    // }

    const findTheCat = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (isPending) ?
        <h1>Loading</h1> :
        (
            <div className="tc" >
                <h1 className="f1">Cool kitties</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scrolle>
                    <ErrorBoundry>
                        <CardList cats={findTheCat} />
                    </ErrorBoundry>
                </Scrolle>
            </div>
        );

}

export default connect(mapStateToProps, mapDispatchToProps)(CatApp); //! Syntax to use connect. Connect is a higher order function - a function that returns another function!