import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ cats }) => {
    const cardArr = cats.map((_obj, i) => {
        return (
            <Card
                key={cats[i].id}
                id={cats[i].id}
                name={cats[i].name}
                email={cats[i].email}
            />
        )
    });
    return (
        <Fragment>
            <div>
                {/* <Card key={cats[0].id} id={cats[0].id} name={cats[0].name} email={cats[0].email} />
            <Card key={cats[1].id} id={cats[1].id} name={cats[1].name} email={cats[1].email} /> */}
                {cardArr}
            </div>
        </Fragment>
    );
}

export default CardList;