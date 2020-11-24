import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import { Container, Row, Col, Button } from "reactstrap";

const initialState = {
    phone: ''
}
const Plan = () => {
    const [formData, setFormData] = useState(initialState)

    const {
        phone
    } = formData
    const handleChange = e => {

        const {name, value } = e.target;
        
        setFormData({ ...formData, [name] : value})
    }

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <form>
                        <div className="form-group">
                            <FormInput
                                type='phone'
                                name='phone'
                                value={phone}
                                className="form-control"
                                handleChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Plan
