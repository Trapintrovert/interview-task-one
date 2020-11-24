import { connect } from "react-redux";
import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import { Container, Row, Col, Button } from "reactstrap";

import { getPlans } from '../../redux/actions/planActions';

import useValidator from '../validateHook/useValidator'

const initialState = {
    phone: '',
    network: ''
}
const Plan = ({getPlans, plan:{ plan, loading }}) => {
    const [formData, setFormData] = useState(initialState)
    const [validator, showValidatorMessage] = useValidator();

    const {
        phone,
        network
    } = formData
    const handleChange = e => {
        const {name, value } = e.target;
        setFormData({ ...formData, [name] : value})
    }

    const handleSubmit = async (e) => {

        if(validator.allValid()){
            setFormData({...formData})
        }else{
            showValidatorMessage(true)
        }
    }

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <FormInput
                                type='phone'
                                name='phone'
                                value={phone}
                                className="form-control"
                                handleChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                            {
                                validator.message('phone', phone, 'required|phone', {
                                    message: {
                                        required: 'Required'
                                    },
                                    className: 'text-danger'
                                })
                            }
                        </div>
                        <div className="form-group">
                            <select
                                name='network'
                                value={network}
                                className="form-control"
                                handleChange={handleChange}
                            >
                                <option value="">Choose Network</option>
                                <option value="mtn">MTN</option>
                                <option value="airtel">Airtel</option>
                            </select>
                        </div>
                        {
                            validator.message('network', network, 'required', {
                                message: {
                                    required: 'Required'
                                },
                                className: 'text-danger'
                            })
                        }
                        <Button>Submit</Button>
                        
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    plan: state.plan
})

export default connect(mapStateToProps, {getPlans})(Plan)
