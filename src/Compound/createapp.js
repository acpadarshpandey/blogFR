import React,{useState} from "react";
 import {Form,Button} from "react-bootstrap"
const  CreateBlog=(props)=> {
  
  const intialState={id:null,title:" ",body:" "}
  const [blog,setBlog]=useState(intialState)

  const handleChange=(e)=>{
    const{name,value}=e.target
    setBlog({...blog,[name]: value })
  }

  const OnSubmit=(e)=>{
    e.preventDefault()
    props.addpost(blog)
    setBlog(intialState)
  }

  return(
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Blog Title</Form.Label>
    <Form.Control type="text"  name="title" value={blog.title} onChange={handleChange} />
  
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Blog Body</Form.Label>
    <Form.Control as="textarea" rows={3} name="body" value={blog.body}  onChange={handleChange} />
  </Form.Group>
  <Button onClick={OnSubmit}>
    Submit
  </Button>
</Form>
      
  )
}
export default  CreateBlog;