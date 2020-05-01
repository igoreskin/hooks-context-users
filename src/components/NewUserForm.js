import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import uuidv4 from 'uuid/v4'
import UsersContext from '../context';

const NewUserForm = () => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: ''
  });

  const { state, dispatch } = useContext(UsersContext);

  const handleNameChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM IN NEW USER FORM: ", { ...form, id: uuidv4() })
    dispatch({ type: "CREATE_USER", payload: { ...form, id: uuidv4() }})
    setForm({ firstName: '', lastName: '' })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input name="firstName" required placeholder="First name" onChange={handleNameChange} value={form.firstName}></Input>
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input name="lastName" required placeholder="Last name" onChange={handleNameChange} value={form.lastName}></Input>
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">Create</Button>
      </FormGroup>
    </Form>
  )
}

export default NewUserForm;