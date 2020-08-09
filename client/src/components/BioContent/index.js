import React from 'react'
import { Grid, Image, Button, Container, Divider } from 'semantic-ui-react'

const BioContent = () => (
  <div>
    <Divider hidden />
    <Container>

  <Grid>
    <Grid.Column width={4}>
    <Image src='/Images/bw-5.jpg' fluid rounded bordered />
    </Grid.Column>
    <Grid.Column width={9}>
    
      <h3>My key experience highlights include; being an assistant, event planning, laying the foundation for a new service, managing all support requests and reproducing bugs, QA testing, new feature user story writing, enhancement management, and sprint planning.</h3>
      <h3>Currently working on expanding my knowledge base and experience.</h3>
    </Grid.Column>
    <Grid.Column width={3}>
      <Button circular color='linkedin' icon='linkedin' size='large' href='https://www.linkedin.com/in/mirandaloosle/' target='_blank' />
      <Divider hidden />
      <Button circular color='black' icon='github square' size='large' href='https://github.com/Mirandor' target='_blank' />
    </Grid.Column>
  </Grid>

  </Container>
  </div>
)

export default BioContent;