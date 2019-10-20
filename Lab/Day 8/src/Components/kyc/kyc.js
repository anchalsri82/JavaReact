import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Kyc extends Component {
  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='kyc'>
        <Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">Kyc</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <center>
              <h1>KYC Management</h1>
            </center>
            <br /><br />
          </Col>
        </Row>
        Passport :  <input type="file" id="input"></input> <br/>
        Address proof :  <input type="file" id="input"></input> <br/>
        Registration proof :  <input type="file" id="input"></input> <br/>
        
      </div>
    );
  }
}
export default Kyc;