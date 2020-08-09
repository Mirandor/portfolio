import React from 'react'
import { Header, Divider } from 'semantic-ui-react'

function FooterContent() {
  return (
    <div>
      <Divider />
      <Header as='h6' textAlign='center'>
        Darth Mirandor 2020
      </Header>
      <Divider hidden />
    </div>
  )
}

export default FooterContent;