// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const homeLightImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const homeDarkImg = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerClassName = isDarkTheme
        ? 'home-container-dark'
        : 'home-container-light'
      const homeImg = isDarkTheme ? homeDarkImg : homeLightImg
      const homeHeadingClassName = isDarkTheme
        ? 'home-heading-dark'
        : 'home-heading-light'
      return (
        <>
          <Navbar />
          <div className={homeContainerClassName}>
            <div className="responsive-container">
              <img src={homeImg} alt="home" className="home-img" />
              <h1 className={homeHeadingClassName}> Home </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
