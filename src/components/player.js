import ReactPlayer from 'react-player'
import React, { Component } from 'react';


class ResponsivePlayer extends Component {
  render () {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.twitch.tv/kaisuke'
        />
      </div>
    )
  }
}

export default ResponsivePlayer;
