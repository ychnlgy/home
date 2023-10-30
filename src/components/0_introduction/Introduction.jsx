import { Component } from 'react'
import pic1 from '../../images/blog-1.jpg'
import pic2 from '../../images/blog-2.jpg'
import pic3 from '../../images/blog-3.jpg'
import IntroSlide from './IntroSlide'


export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="introduction">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <IntroSlide
                image={pic1}
                line1="Hi!"
                line2="I'm Yuchen"
                buttonLabel="CV"
                buttonLink="https://drive.google.com/file/d/1J9WELImw5pSF_Nm2Wq0qSpSj_68BsFSm/view?usp=sharing"
                buttonIcon="icon-download4"
              />
              <IntroSlide
                image={pic2}
                line1="I build industrial"
                line2="intelligent systems"
                buttonLabel="Projects"
                buttonLink="https://github.com/ychnlgy"
                buttonIcon="icon-briefcase3"
              />
              <IntroSlide
                image={pic3}
                line1="Here are some of"
                line2="my major research projects"
                buttonLabel="Research"
                buttonLink="https://github.com/ychnlgy"
                buttonIcon="icon-book"
              />
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
