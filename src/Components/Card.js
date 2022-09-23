import React, { Fragment } from "react";

const Card = ({ name, email, id }) => {
    //* another way is {id, name email} = props;
    return (
        <Fragment>
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img alt="Cute Blue Cat" src={`https://robohash.org/${id}.png?set=set4`} width={200} height={200} />
                {/* <img alt="Cute Blue Cat" src="https://robohash.org/3.png?set=set4" width={200} height={200} /> */}
                {/* <h2>Cute Cat</h2>
            <p>blue.cute.cat@gmail.com</p> */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </Fragment>
    );
}

export default Card;