import React from "react";
import{Navbar,Form,Nav,Button} from "react-bootstrap";

const Header=()=>{
    return(
        <div>
            <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Blog Post</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <Button variant="outline-light">Add Blog</Button>
    </Form>
  </Navbar>
</>
         </div> 
    )
}
export default Header;

