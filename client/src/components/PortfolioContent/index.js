import React from 'react';
import ProjectComponent from '../ProjectComponent/index';
import { Container, Divider } from 'semantic-ui-react'

function Portfolio() {
  
  return (
    <div>
      <Divider hidden />
      <Container>
        <ProjectComponent />
      </Container>
      <Divider hidden />
    </div>
  )
}

export default Portfolio;