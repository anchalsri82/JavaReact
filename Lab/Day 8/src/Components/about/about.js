import React, { Component } from 'react';
import { Row, Col } from 'antd';

class About extends Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.props.history.push("/contact");
  }

  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='about'>
        <Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">About Us</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <h3>
              We are accounting!!!
			      </h3>
            <hr />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
