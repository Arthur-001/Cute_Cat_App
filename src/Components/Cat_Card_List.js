import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // if(true){
    //     throw new Error('Noooooooo')
    // }
    const cardArr = robots.map((_obj, i) => {
        return (
            <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        )
    });
    return (
        <Fragment>
            <div>
                {/* <Card key={robots[0].id} id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card key={robots[1].id} id={robots[1].id} name={robots[1].name} email={robots[1].email} /> */}
                {cardArr}
            </div>
        </Fragment>
    );
}

export default CardList;