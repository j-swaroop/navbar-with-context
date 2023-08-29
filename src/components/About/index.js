// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const aboutLightImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const aboutDarkImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutContainerClassName = isDarkTheme
        ? 'about-container-dark'
        : 'about-container-light'
      const aboutImg = isDarkTheme ? aboutDarkImg : aboutLightImg
      const aboutHeadingClassName = isDarkTheme
        ? 'about-heading-dark'
        : 'about-heading-light'
      return (
        <>
          <Navbar />
          <div className={aboutContainerClassName}>
            <div className="responsive-container">
              <img src={aboutImg} alt="about" className="about-img" />
              <h1 className={aboutHeadingClassName}> About </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
