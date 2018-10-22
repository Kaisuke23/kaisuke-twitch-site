import React, { Component } from 'react';

import Instafeed from 'react-instafeed';

const instafeedTarget = 'Instafeed';
const UserId = '8468729986'
const ClientId = '30f21a10254146b4815c8405fb03c69a'
const Token = '8468729986.30f21a1.c9b70eca25a24703ac50956802b9fd4d'


const template = `<div class="col-md-4"><div class="insta-post"><a href='{{link}}' target='_blank' class='instafeed__item'>
                          <img class='instafeed__item__background img-responsive' src='{{image}}' />
                            <div class='instafeed__item__overlay'>
                              <div class='instafeed__item__overlay--inner'>
                                <span class='instafeed__item__caption'></span>
                                <span class='instafeed__item__location'></span>
                              </div>
                            </div>
                        </a></div></div>`;
                        // '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
class Feed extends Component {
  componentDidMount() {

    }

    shouldComponentUpdate() {
        return false;
    }
  render() {
    return (
      <div id = {instafeedTarget}>
        <Instafeed
          limit='5'
          resolution='low_resolution'
          target = {instafeedTarget}
          template ={template}
          userId={UserId}
          clientId= {ClientId}
          accessToken= {Token}
        />
    </div>
    );
  }
}

export default Feed;
