import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-twitch"></span>
        </div>
        <div className="content">
            <div className="inner">
              <div className = "innerBackgroud">
                <h1>Kaisuke</h1>
                <p>If you ever think that you need to do things only one way, you are solemnly wrong. Always expect the unexpected and think outside the box.
                </p>
                <ul className="icons">
                  <li><a href="https://twitter.com/kaisuke46/" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="https://www.instagram.com/kaisuke_builds/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                </ul>
              </div>
            </div>
        </div>
        <nav>
            <ul>
                <li ><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Stream</a></li>
                <li ><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Gundams</a></li>
                <li ><a href="javascript:;" onClick={() => {props.onOpenArticle('command')}}>Commands</a></li>
                <li ><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>F.A.Q</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
