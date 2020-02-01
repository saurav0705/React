import React ,{ Component } from "react";
import Comment from './CommentComponent';
import { Card,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';


function renderDish(dish){
    if(dish != null){
        return (
            <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
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

function renderComment(dish){
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
        <div className="row">
        <div  className="col-12 col-md-5 m-1">
          {renderDish(props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {renderComment(props.dish)}
    </div>
      </div>
      )
    
} 

export default DishDetail;