import React, { Component } from 'react';
import { Row, Col } from 'antd';
class Contact extends Component {
  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='contact'>
          <Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">Contact Us!</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <h6>
              <br />
              Email: info@moneto.com
              <br /><br />
              </h6>
          </Col>
        </Row>
      </div>      
    );
  }
}
export default Contact;
