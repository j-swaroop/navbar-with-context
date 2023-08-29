// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const lightThemeWebSiteLogoImg =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const darkThemeWebSiteLogoImg =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeLogoImg =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const darkThemeLogoImg =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const containerClassName = isDarkTheme
        ? 'nav-container-dark'
        : 'nav-container-light'
      const themeClassName = isDarkTheme ? 'list-item-dark' : 'list-item-light'
      const themeWebSiteLogo = isDarkTheme
        ? darkThemeWebSiteLogoImg
        : lightThemeWebSiteLogoImg
      const themeLogo = isDarkTheme ? darkThemeLogoImg : lightThemeLogoImg

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={containerClassName}>
          <div className="nav-items">
            <img
              alt="website logo"
              className="website-logo"
              src={themeWebSiteLogo}
            />
            <ul className="nav-list">
              <Link to="/" className="link-item">
                <li className={themeClassName}> Home </li>
              </Link>
              <Link to="/about" className="link-item">
                <li className={themeClassName}> About </li>
              </Link>
            </ul>
            <button className="theme-btn" type="button" data-testid="theme" onClick={onClickToggleTheme}>
              <img
                alt="theme"
                className="theme-logo"
                src={themeLogo}
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
