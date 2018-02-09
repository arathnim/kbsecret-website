import React from 'react'
import styles from '../style.sass'

import {
  Link
} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {content: "<p></p>"}};
    fetch("/"+this.props.foo+".json").then(x => x.json()).then(x => {this.setState({data: x})})
    console.log(this.props.foo);
  }

  render() {
    return (
        <div className={styles.section} style={{ paddingTop: '4%'}} dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
    );
  }
}

export default Header
