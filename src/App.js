import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <h1 class="pretty-text">Project Quantum</h1>
                  <div data-netlify-identity-menu />
                  <ul class="fa-ul">
                    <li>
                      <a href="/projects">
                        <span class="fa-li">
                          <i class="fas fa-laptop-code" />
                        </span>
                        Project Quantum (Source)
                      </a>
                    </li>
                    <li>
                      <a href="/server">
                        <span class="fa-li">
                          <i class="fa fa-server" aria-hidden="true" />
                        </span>
                        Server
                      </a>
                    </li>
                    <li>
                      <a href="/members">
                        <span class="fa-li">
                          <i class="fa fa-users" aria-hidden="true" />
                        </span>
                        Members
                      </a>
                    </li>
                  </ul>
                </div>
              );
            }}
          />
          <Route
            path="/projects"
            exact
            render={() => {
              return (
                <div>
                  <h1 class="pretty-text">Projects</h1>
                  <ul class="fa-ul">
                    <li>
                      <a href="/">
                        <span class="fa-li">
                          <i class="fas fa-arrow-left" />
                        </span>
                        go back
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/mRm6mPx">
                        <span class="fa-li">
                          <i class="fab fa-discord" aria-hidden="true" />
                        </span>
                        Discord
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/QuantumVI">
                        <span class="fa-li">
                          <i class="fab fa-github" aria-hidden="true" />
                        </span>
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              );
            }}
          />
          <Route
            path="/server"
            exact
            render={() => {
              return [
                <div>
                  <h1 class="pretty-text">Servers</h1>
                  <p>We specialize in Style and Security.</p>
                  <ul class="fa-ul">
                    <li>
                      <a href="/">
                        <span class="fa-li">
                          <i class="fas fa-arrow-left" />
                        </span>
                        go back
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa-li">
                          <i class="fas fa-envelope" aria-hidden="true" />
                        </span>
                        Den The Bot
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/mRm6mPx">
                        <span class="fa-li">
                          <i class="fab fa-discord" aria-hidden="true" />
                        </span>
                        Invite
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.gg/mRm6mPx">
                        <span class="fa-li">
                          <i class="fab fa-discord" aria-hidden="true" />
                        </span>
                        &#123;Quantum&#124;#0001
                      </a>
                    </li>
                  </ul>
                </div>,
                <footer>
                  <p>© Den: The place where Security and Users come first.</p>
                </footer>
              ];
            }}
          />
          <Route
            path="/members"
            exact
            render={() => {
              return (
                <div>
                  <h1 class="pretty-text">Members</h1>
                  <ul class="fa-ul">
                    <li>
                      <a href="/">
                        <span class="fa-li">
                          <i class="fas fa-arrow-left" />
                        </span>
                        go back
                      </a>
                    </li>
                    <li>
                      <div>
                        <a href="https://discord.gg/mRm6mPx">
                          <img
                            src="https://cdn.discordapp.com/avatars/202237865151823883/a_124d1f45dc6fed8b2639020602f04b38.gif"
                            alt="Quantum"
                          />
                          <img
                            src="https://cdn.discordapp.com/avatars/202237865151823883/a_ab43c337e26949b8481fdcb147cd51bc.gif"
                            alt="Quantum"
                          />
                          <p>&#123;Quantum&#124;#0001</p>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a href="https://discord.gg/mRm6mPx">
                          <img
                            src="https://cdn.discordapp.com/avatars/445360722998853632/871425d144f67af45cec33ccbf751484.png"
                            alt="Kevin"
                          />
                          <p>ɹǝʇsʌǝʞ ƃuıɥƃnɐl#1822</p>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
