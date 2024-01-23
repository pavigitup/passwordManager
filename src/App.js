import {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-con">
        <div className="app-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-icon"
          />
        </div>

        <div className="card-1">
          <div className="password-card-con">
            <h1 className="header">Add New Password</h1>
            <div className="card-tag">
              <div className="site-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website"
                />
              </div>
              <div className="website-input-box">
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="web-input"
                />
              </div>
            </div>
            <div className="card-tag">
              <div className="site-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website"
                />
              </div>
              <div className="website-input-box">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="web-input"
                />
              </div>
            </div>
            <div className="card-tag">
              <div className="site-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website"
                />
              </div>
              <div className="website-input-box">
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="web-input"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div>
          <div>
            <h1>Your Passwords</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="horizontal-line">p</div>
          <div>
            <input type="checkbox" />
            <p>Show Passwords</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
