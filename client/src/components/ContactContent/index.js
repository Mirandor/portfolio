import React from 'react'
import { Form, Segment, Container, Header, Divider, TextArea, Button } from 'semantic-ui-react'

const Contact = () => (
  <div>
  <Divider hidden />
  <Container>
  <Segment>
  <Header as='h3' textAlign='center'>
    Contact Me
  </Header>
  <Divider />
  <Divider hidden />
  <Form>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
        placeholder='Bruce'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        placeholder='Wayne'
      />
    </Form.Group>
    <Form.Input 
      fluid
      id='form-subcomponent-shorthand-input-email'
      label='Email' 
      placeholder='bruce@wayne.com' />
    <Form.Field
      fluid
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'
      placeholder='Enter your message here'
    />
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
  </Container>
  <Divider hidden />
  </div>
)

export default Contact;