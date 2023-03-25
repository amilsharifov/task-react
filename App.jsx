import React from 'react'
import './App.css'

const App = () => {
    return (
        <div className='container'>
            <div className="users">
              <h1>Users</h1>
            </div>
            <nav>
              <div className="main-left">
                <div className="first">
                  <img src="./images/Frame.svg" alt="" />
                  <input placeholder='Search Users' type="search" />
                </div>
              </div>
              <div className="right">
                <h1 className='first'>Reputation</h1>
                <h1 className='second'>New Users</h1>
                <h1 className='first'>Voters</h1>
                <h1 className='first'>Editors</h1>
                <h1 className='first'>Moderators</h1>
              </div>
            </nav>
            <div className="card-c">
              <div className="cards">
                <div className="card">
                  <div className="img">
                    <img src="./imgs/Ellipse 1(5).svg" alt="" />
                  </div>
                  <div className="text">
                    <h1>Lelah Nichols</h1>
                    <p>Troy, MI</p>
                    <div className="textss">
                      <h1>clothes</h1>
                      <h1>stem</h1>
                    </div>
                  </div>
                </div>
                <div className="carda">
                  <div className="img">
                    <img src="./imgs/Ellipse 1 (6).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Jesus Weiss</h1>
                    <p>Fort Worth, TX</p>
                    <div className="textsssss">
                      <h1>headset</h1>
                      <h1>gadget</h1>
                      <h1>speed</h1>
                      <h1>winter</h1>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (7).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Annie Rice</h1>
                    <p>Austin, TX</p>
                    <div className="textss">
                      <h1>road</h1>
                      <h1>mountain</h1>
                      <h1>trip</h1>
                      <h1>earth</h1>
                      <h1>nature</h1>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (8).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Robert Brower</h1>
                    <p>Cincinnati, OH</p>
                    <div className="textss">
                      <h1>Maintenance</h1>
                      <h1>gears</h1>
                      <h1>frames</h1>
                      <h1>repair</h1>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (9).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Amy Campbell</h1>
                    <p>Warrior, AL</p>
                    <div className="textss">
                      <h1>music</h1>
                      <h1>disks</h1>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="img">
                    <img src="./images/Ellipse 1 (10).svg" alt="" />
                  </div>
                  <div className="texts">
                    <h1>Anthony S. Morin</h1>
                    <p>Lyndhurst, NJ</p>
                    <div className="textss">
                      <h1>vintage</h1>
                      <h1>electric</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default App