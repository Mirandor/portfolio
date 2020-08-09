import React, { Component } from 'react'
import { Menu, Container, Divider } from 'semantic-ui-react'

export default class MainNav extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    var { activeItem } = this.state

    return (
      <div >
        <Menu pointing secondary fluid widths={3}>
        <Divider />
        <Container>
          <Menu.Item
            name='bio'
            active={activeItem === 'bio'}
            onClick={this.handleItemClick}
            href="/bio/"
          />
          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
            href="/portfolio/"
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            href="/contact/"
          />
        </Container>
        </Menu>
      </div>
    )
  }
}