import React ,{ Component } from "react";
import Comment from './CommentComponent';
import { Card, CardImg, CardBody,CardText,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish(dish){
    {console.log('dish here ------------- ',dish)}
    if(dish != null){
        return (
            <Card>
                {console.log('inside card dish here ------------- ',dish.dish)}
            <CardImg top src={dish.dish.image} alt={dish.dish.name} />
            <CardBody>
              <CardTitle>{dish.dish.name}</CardTitle>
              <CardText>{dish.dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}

function RenderComments(dish){
    if(dish!=null)
    {
        return (
            <Comment comments={dish.comments}/>
        );
    }
    else{
        return ( <div></div> );
    }
}

const DishDetail = (props) =>{

    
        
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {console.log(props.dish)}
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
    
} 

export default DishDetail;