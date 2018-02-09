import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid';

// import FontAwesome from 'react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.header}>

              <a href="/man/kbsecret.1.html">
                  <span className={styles.navitem}>CLI Docs</span>
              </a>

              <a href="http://www.rubydoc.info/gems/kbsecret/">
                  <span className={styles.navitem}>Gem Docs</span>
              </a>

              <a href="http://blog.yossarian.net/tags#kbsecret">
                  <span className={styles.navitem}>Blog</span>
              </a>

              <a href="https://github.com/kbsecret/kbsecret">
                  <span className={styles.navitem}>Github</span>
              </a>

        </div>
    );
  }
}

export default Header
