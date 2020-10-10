import React from "react";
import {Card}from "react-bootstrap"

const Display=(props)=>{
    return(

        <div style={{display: "flex"}}>
      
        { 
         
        
        props.blogs.slice(props.pagination.start,props.pagination.end).map((blog) =>
            (<div style={{margin:"2rem"}}>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
    <Card.Text>
      {blog.body}
    </Card.Text>
    <Card.Link onClick={()=>props.editpost(blog)}>Edit</Card.Link>
    <Card.Link  onClick={()=>props.delpost(blog.id)}>Delete</Card.Link>
  </Card.Body>
</Card>
        </div> )  ) }
        
     </div>

          )
}
export default Display;