import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Home extends Component {
  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='home'>
        <Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">Dashboard</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <center>
              <h1>Welcome To moneto.com</h1>
            </center>
            <br /><br />
          </Col>
        </Row>
        <table>
          <tr>
          <th>Receivable</th>
            <th>Payable</th>
          </tr>
          <tr>
            <td># of Invoices - 57</td>
            <td># of Invoices - 19</td>
          </tr>
          <tr>
            <td># of Invoices overdue - 9</td>
            <td># of Invoices overdue - 3</td>
          </tr>
          <tr>
            <td>Avg Pending Amount - USD 5760.1</td>
            <td>Avg Pending Amount - USD 3106.4</td>
          </tr>
          <tr>
            <td># Other stats</td>
            <td># Other stats</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Home;