import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export const Formreg = () => {


const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[mobile,setMobile]=useState("");

const handleShow=(e)=>{
    e.preventDefault();
    console.log(`"Name":${name},"Email":${email},"Password":${password},"Mobile":${mobile}`);
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    
}


    return (
        <Container style={{ margin: "5%" }}>
            <Row style={{ width: "50%", marginLeft: "25%" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="mobile" placeholder="Enter Mobile Number" maxLength={10} onChange={(e)=>setMobile(e.target.value)} value={mobile} />

                    </Form.Group>
                    <Button type="submit" variant="info" onClick={handleShow}  >Show</Button>

                </Form>
            </Row>
        </Container>
    )

}