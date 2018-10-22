import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import Table from './table.js';
import Table1 from './table1.js'
import Feed from './feed'

// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    let commands =  [
        {command: '!commands', description: 'It will bring you to this page'},
        {command: '!bucks', description: 'How much cyber bucks do you have?'},
        {command: '!kitty', description: 'Marylin likes to bother me from time to time'},
        {command: '!fight', description: 'THERE CAN ONLY BE ONE!!!'},
        {command: '!pass', description: 'Psssssst give meh teh bucks plz'},
        {command: '!heist', description: 'Need cyber bucks now?'},
        {command: '!jafeel', description: 'Ja definitely feel you there'},
        {command: '!weeb', description: 'gotta be a weeb'},
        {command: '!rank', description: 'Shows you your rank in weeb town'},
        {command: '!fbi', description: 'WEE WOO WEE WOO LOLI POLICE OPEN UP'},
        {command: '!uptime', description: 'how long has kaisuke been streaming'},
        {command: '!bdg', description: 'oh bdg~'},
        {command: '!weebs', description: 'You know who are the weebs'},
        {command: '!dead', description: 'just gotta pay them respects'},
        {command: '!discord', description: 'if you like my stream, join the discord'},
        {command: '!airdkawaii', description: 'a kawaii raid'},
        {command: '!rankweeb', description: 'the weeb raid'},
        {command: '!raidranch', description: 'RANCH IT UP!'},
    ];

    let faq = [
      {question: 'What do you want to be called', answer: 'you can call me either Kaisuke, Kai, Kalani, Ed'},
      {question: 'How do you pronounce Kaisuke', answer: 'either Kai-Soo-Kay or Kai-skay'},
      {question: 'What do you do on your stream', answer: 'A lot of the time we do gundam builds or we play games.'},
      {question: 'I see you have cyber bucks, what can i use them for?', answer: 'So if you get to 1 Million Cyber Bucks i will either get you nenderoid/figurine or a Master Grade Gundam*'},
      {question: 'Can i ask you for tips on how to do gunpla?', answer: 'Yes! Most definitely! it is encouraged. even if i can not answer it, someone in chat will probably know!'},
      {question: 'How long have you been doing gunpla?', answer: 'i have been doing gunpla for almost 2 years now and i am still learning'},

    ];

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Stream</h2>
          <p>The gundam stream has commenced please sit back and relax</p>
          <ReactPlayer className = "player" url='https://www.twitch.tv/kaisuke' playing='false' height = "620" width="380"/>
          <p>If you do like the stream, please consider watching it on <a href = "https://www.twitch.tv/kaisuke">twitch</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Gundams</h2>
            <Feed/>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">F.A.Q</h2>
          <Table1 data = {faq}/>
          <p>* The nenderoid<span>&#47;</span>figureine and Master Grade has to be under $50 USD</p>
          {close}
        </article>

        <article id="command" className={`${this.props.article === 'command' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Command List</h2>
          All the commands here can be used in the chat of the stream!
          <Table data={commands}/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
