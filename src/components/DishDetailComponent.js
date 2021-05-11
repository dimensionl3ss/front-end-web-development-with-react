import React from 'react';
import {Card, CardImg,CardText, CardBody,CardTitle } from 'reactstrap';

function RenderComments({comments})
{
    if (comments != null) {
        let options = { year: "numeric", month: "short", day: "2-digit" };
        return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
            <li className="mb-2">{comment.comment}</li>
            <li>
                -- {comment.author}{" "}
                {new Intl.DateTimeFormat("en-US", options).format(new Date(Date.parse(comment.date)))}
            </li>
            </ul>
        ));
    }
    return <div></div>;
}

function RenderDish( {dish} )
{
    return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
    );
}
const DishDetail = (props) => {

    if(props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    return <div></div> ;
}

export default DishDetail;