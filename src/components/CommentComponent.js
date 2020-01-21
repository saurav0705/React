import React, { Component } from 'react';
import { Card,CardBody,CardText,CardTitle } from 'reactstrap';


class Comment extends Component{
    constructor(props)
    {
        super(props);
    }



    render(){
        const comment = this.props.comments.map((commen)=>{
            return (
            <Card>
                <CardTitle>
                    {commen.comment}
                </CardTitle>
                <CardBody>
                    <CardText>--{commen.author} , {commen.date}</CardText>
                </CardBody>
            </Card>
            
                
            );
        })
    
        return (
            <Card>
                <CardTitle>Comments</CardTitle>
                <CardBody>
                    {comment}
                </CardBody>
            </Card>
        );
    }
}

export default Comment;