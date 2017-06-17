import React from 'react';
import { Form, TextField, SubmitField } from 'react-components-form/Bootstrap';
import Schema from 'form-schema-validation';

const loginSchema = new Schema({
    login:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const model = {
    login: 'TestLogin',
    password: '1234'
};

const LoginForm  = () => (
    <Form
        schema={loginSchema}
        model={model}
        onSubmit={data => console.log(data)}
        onError={(errors, data) => console.log('error', errors, data)}
    >
        <TextField name="login" label="Login" type="text" />
        <TextField name="password" label="Login" type="text" />
        <SubmitField value="Submit" />
    </Form>
);

export default LoginForm;