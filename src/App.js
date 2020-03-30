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
                    {/* <li>
                      <a href="/projects">
                        <span class="fa-li">
                          <i class="fa fa-users" aria-hidden="true" />
                        </span>
                        Projects
                      </a>
                    </li> */}
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
                    {/* <li>
                      <div>
                        <a href="https://discord.gg/D9yrEv">
                          <img
                            src="https://cdn.discordapp.com/avatars/202237865151823883/a3cb20db58e83bc75137e72b2cf19c67.png?size=128"
                            alt="{Quantum}#0001"
                          />
                          &#123;Quantum&#125;#0001
                        </a>
                        <a href="https://www.reddit.com/user/Quantum_Gaming">
                          <img
                            src="https://external-preview.redd.it/QJRqGgkUjhGSdu3vfpckrvg1UKzZOqX2BbglcLhjS70.png?auto=webp&s=c681ae9c9b5021d81b6c4e3a2830f09eff2368b5"
                            width="25"
                            height="25"
                            alt="u/Quantum_Gaming"
                          />
                          [ u/Quantum_Gaming ]
                        </a>
                        <a href="https://steamcommunity.com/id/QuantumVI/">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                            width="25"
                            height="25"
                            alt="QuantumVI"
                          />
                          [ QuantumVI ]
                        </a>
                        <a href="https://open.spotify.com/user/adrian1pro">
                          <img
                            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
                            width="25"
                            height="25"
                            alt="adrian1pro"
                          />
                          [ adrian1pro ]
                        </a>
                        <a href="https://www.twitch.tv/quantum_vi">
                          <img
                            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/022015/twitch.png?itok=i7AaEWe5"
                            width="25"
                            height="25"
                            alt="quantum_vi"
                          />
                          [ quantum_vi ]
                        </a>
                        <a href="https://www.youtube.com/channel/UC31nROokQa6sWAAZxbapcRw">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg"
                            width="25"
                            height="25"
                            alt="Quantum"
                          />
                          [ Quantum ]
                        </a>
                      </div>
                    </li>
                    <br />
                    <li>
                      <div>
                        <a href="https://discord.gg/D9yrEv">
                          <img
                            src="https://cdn.discordapp.com/avatars/445360722998853632/8ee4563b45ce4ca104f31c840ade5499.png?size=128"
                            alt="Kevin Arellano"
                          />
                          IC443_SR_Medusa#1822
                        </a>
                        <a href="https://www.reddit.com/user/KevinArellano94">
                          <img
                            src="https://external-preview.redd.it/QJRqGgkUjhGSdu3vfpckrvg1UKzZOqX2BbglcLhjS70.png?auto=webp&s=c681ae9c9b5021d81b6c4e3a2830f09eff2368b5"
                            width="25"
                            height="25"
                            alt="u/KevinArellano94"
                          />
                          [ u/KevinArellano94 ]
                        </a>
                        <a href="https://steamcommunity.com/id/Metal_Girrr_94/">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                            width="25"
                            height="25"
                            alt="Metal_Girrr_94"
                          />
                          [ Metal_Girrr_94 ]
                        </a>
                        <a href="https://open.spotify.com/user/kevin.arellano94">
                          <img
                            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
                            width="25"
                            height="25"
                            alt="kevin.arellano94"
                          />
                          [ kevin.arellano94 ]
                        </a>
                        <a href="https://www.twitch.tv/kevinarellano94">
                          <img
                            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/022015/twitch.png?itok=i7AaEWe5"
                            width="25"
                            height="25"
                            alt="kevinarellano94"
                          />
                          [ kevinarellano94 ]
                        </a>
                        <a href="https://www.youtube.com/channel/UClHn2FuUnrxXW07eJCYfazw">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg"
                            width="25"
                            height="25"
                            alt="Kevin Arellano"
                          />
                          [ Kevin Arellano ]
                        </a>
                      </div>
                    </li> */}
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
