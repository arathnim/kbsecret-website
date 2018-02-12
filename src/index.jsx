import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './containers/Header.jsx'
import Menu from './containers/Menu.jsx'
import Section from './containers/Section.jsx'

import styles from './style.sass'
import history from './history'

var isMobile = 'ontouchstart' in window;

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentpage: history.location.hash};
    history.listen((location, action) => {
      this.setState({currentpage: location.hash})
    })
  }

  render() {
      return (
          <div className={styles.home} style={{ fontSize: isMobile ? '2em' : '1em'}}>
            <Header />

            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <p style={{ marginBottom: '0.5em', marginTop: 0 }}><span style={{ color: 'rgb(218, 52, 52)'}}>kb</span>secret</p>
              </div>
              <p>A secret manager backed by Keybase and KBFS</p>
            </div>

            <Router history={history}>

            <div style={{ 'overflow-x': 'hidden'}}>
            <div className={isMobile ? styles.mobilesection : styles.section} style={{ paddingBottom: 0, paddingTop: '4%'}}><Menu active={this.state.currentpage} /></div>

            <Switch>

              <Route exact
                path="/intro/"
                foo="intro"
                component={()=> <Section foo="intro" />}>
              </Route>

              <Route exact
                path="/install/"
                component={()=> <Section foo="install" />}>
              </Route>

              <Route exact
                path="/quickstart/"
                component={()=> <Section foo="quickstart" />}>
              </Route>

              <Route exact
                path="/customize/"
                component={()=> <Section foo="customize" />}>
              </Route>

              <Redirect exact from="/" to="/intro/" />

            </Switch>
            </div>
            </Router>

          </div>
    );
  }
}

document.title = "kbsecret"

render(<Init />, document.getElementById('main'))
