import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardImgOverlay} from "reactstrap";

function CartImgOverlay() {
    return null;
}

const MenuItem = (props) => {
    const {name, image} = props.dish;
    return (
        <div>
            <Card style={{margin: "10px"}}>
                <CardBody>
                    <CardImg width="100%"
                             alt={name}
                             src={image}
                             style={{opacity: "0.5"}}
                    />
                    <CardImgOverlay>
                        <CardTitle onClick={props.dishSelect}
                                   style={{cursor: 'pointer'}}
                        >{name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;