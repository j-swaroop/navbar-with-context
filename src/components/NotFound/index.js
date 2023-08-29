// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundContainerClassName = isDarkTheme
        ? 'notfound-container-dark'
        : 'notfound-container-light'
      const notFoundHeadingClassName = isDarkTheme
        ? 'notfound-heading-dark'
        : 'notfound-heading-light'
      const notFoundTextClassName = isDarkTheme
        ? 'notfound-text-dark'
        : 'notfound-text-light'
      return (
        <>
          <Navbar />
          <div className={notFoundContainerClassName}>
            <div className="responsive-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
                className="notfound-img"
              />
              <h1 className={notFoundHeadingClassName}> Lost Your Way? </h1>
              <p className={notFoundTextClassName}>
                {' '}
                We cannot seem to find the page you are looking for.{' '}
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
