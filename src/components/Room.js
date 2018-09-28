import React, { Component } from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')(({ color }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  backgroundColor: `${color}`,
  padding: '10px',
  width: '100%'
}))

const RoomWrapper = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%'
}, ({ alignItems }) => ({
  alignItems: `${alignItems}`
}))

const A = styled('a')({
  textDecoration: 'none',
  color: 'black'
})

class Room extends Component {
  renderTalk = () => {
    const { speaker, title, link, alignItems } = this.props
    return (
      <RoomWrapper alignItems={alignItems}>
        <h2><A href={link} target='_blank' rel='noopener noreferrer'>{title}</A></h2>
        <h4>{speaker}</h4>
      </RoomWrapper>
    )
  }

  renderBreak = () => {
    const { description } = this.props

    return (
      <div>
        <h2>{description}</h2>
      </div>
    )
  }

  renderKeynote = () => {
    const { speaker, title, link, alignItems } = this.props

    return (
      <RoomWrapper alignItems={alignItems}>
        <h2><A href={link} target='_blank' rel='noopener noreferrer'>{title}</A></h2>
        <h4>{speaker}</h4>
      </RoomWrapper>
    )
  }

  render () {
    const { type, color } = this.props
    return (
      <Wrapper color={color}>
        { type === 'break' && this.renderBreak() }
        { type === 'talk' && this.renderTalk() }
        { type === 'keynote' && this.renderKeynote() }
      </Wrapper>
    )
  }
}

export { Room }
