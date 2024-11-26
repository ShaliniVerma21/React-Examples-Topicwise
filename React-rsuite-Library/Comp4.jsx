import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import React from 'react'
// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Form/styles/index.css';
import 'rsuite/FormControl/styles/index.css';
import 'rsuite/FormControlLabel/styles/index.css';
import 'rsuite/FormErrorMessage/styles/index.css';
import 'rsuite/FormHelpText/styles/index.css';
import 'rsuite/FormGroup/styles/index.css';
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Comp4 = () => (
  <Form>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="textarea">
      <Form.ControlLabel>Textarea</Form.ControlLabel>
      <Form.Control rows={5} name="textarea" accepter={Textarea} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
);
export default Comp4;