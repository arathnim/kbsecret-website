import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

import { Grid, Row, Col } from 'react-flexbox-grid';

// import FontAwesome from 'react-fontawesome'

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.menu}>
          <Row>

            <Col xs className={this.props.active == "#/intro/" ? styles.colactive : styles.col}>
              <Link to="/intro/">
                  <span className={styles.menuitem}>Introduction</span>
              </Link>
            </Col>

            <Col xs className={this.props.active == "#/install/" ? styles.colactive : styles.col}>
              <Link to="/install/">
                  <span className={styles.menuitem}>Installation</span>
              </Link>
            </Col>

            <Col xs className={this.props.active == "#/quickstart/" ? styles.colactive : styles.col}>
              <Link to="/quickstart/">
                  <span className={styles.menuitem}>Quickstart</span>
              </Link>
            </Col>

            <Col xs className={this.props.active == "#/customize/" ? styles.colactive : styles.col}>
              <Link to="/customize/">
                  <span className={styles.menuitem}>Customization</span>
              </Link>
            </Col>

          </Row>
        </div>
    );
  }
}

export default Menu
