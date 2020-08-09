import React from 'react'
import { Header, Divider } from 'semantic-ui-react'
import MainNav from "../Nav/mainNav";

function HeaderContent() {
  return (
    <div>
      <Divider hidden />
      <Header as='h1' textAlign='center'>
        Miranda Loosle
        <Header.Subheader>
          Well hello there, welcome to my portfolio.
        </Header.Subheader>
      </Header>
      <MainNav />
    </div>
  )
}

export default HeaderContent;