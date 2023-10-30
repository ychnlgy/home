import { Component } from 'react'

export default class IntroSlide extends Component {
  // PROPS:
  // image: 
  // line1
  // line2
  // buttonLabel
  // buttonLink
  // buttonIcon

  render() {
    return (
      // <li style={{backgroundImage: 'url(images/blog-2.jpg)', width: "50px", height: "50px"}}>
      <div>
        <img src={this.props.image} alt="slide"/>
        
        <div className="overlay" />
          
        <div className="container-fluid">
          
          <div className="row">
            
            
            {/* <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"> */}
              
              <div className="slider-text-inner js-fullheight">
              <div className="desc">
                  <h1>
                    {this.props.line1}
                    <br />
                    {this.props.line2}
                  </h1>
                  <p><a
                    className="btn btn-primary btn-learn"
                    href={this.props.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  ><i 
                  className={this.props.buttonIcon} /> | {this.props.buttonLabel}
                  </a></p>
                </div>
                
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}