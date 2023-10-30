import { Component } from 'react'
import profilePic from '../images/about.png'
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav 
            href="#navbar" 
            className="js-colorlib-nav-toggle colorlib-nav-toggle" 
            data-toggle="collapse" 
            data-target="#navbar" 
            aria-controls="navbar">
              <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img"><img class="rounded" src={profilePic} alt="Profile Pic"/></div>
              <h1 id="colorlib-logo"><a href="https://www.linkedin.com/in/yuchen-li-06580b73/" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkedin2" /> Yuchen Li
              </a></h1>
              <span className="email"> <i className="icon-mail"></i> ychnlgy@gmail.com</span>
            </div>
            <hr></hr>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
