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

function order(p) {
  if (p == "#/") {
    return 1;
  }
  if (p == "#/install/") {
    return 2;
  }
  if (p == "#/quickstart/") {
    return 3;
  }
  if (p == "#/customize/") {
    return 4;
  }
  return 0;
}

function calcEnterOffset(c, l) {
  if (order(c) < order(l)) {
    return -100;
  } else {
    return  100;
  }
}

function calcExitOffset(c, l) {
  if (order(c) > order(l)) {
    return -100;
  } else {
    return  100;
  }
}

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentpage: '#/intro/', lastpage: '#/intro/'};
    history.listen((location, action) => {
      this.setState({lastpage: this.state.currentpage})
      this.setState({currentpage: location.hash})
    })
  }

  render() {
      return (
        <Router history={history}>
          <div className={styles.home}>
            <Header />

            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <p style={{ marginBottom: '0.5em', marginTop: 0 }}><span style={{ color: 'rgb(218, 52, 52)'}}>kb</span>secret</p>
              </div>
              <p>A secret manager backed by Keybase and KBFS</p>
            </div>

            <div className={styles.section} style={{ paddingBottom: 0, paddingTop: '4%'}}><Menu active={this.state.currentpage} /></div>

            <Switch
              atEnter={{ offset: calcEnterOffset(this.state.currentpage, this.state.lastpage), opacity: 0 }}
              atLeave={{ offset: calcExitOffset(this.state.currentpage, this.state.lastpage), opacity: 0}}
              atActive={{ offset: 0, opacity: 1 }}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
                opacity: styles.opacity,
              })}>

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
    );
  }
}

document.title = "kbsecret"

render(<Init />, document.getElementById('main'))
