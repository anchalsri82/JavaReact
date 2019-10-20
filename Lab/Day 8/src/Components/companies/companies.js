import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Companies extends Component {
  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='companies'>
<Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">Companies</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <center>
              <h1>Company Management</h1>
            </center>
            <br /><br />
          </Col>
        </Row>
        
        Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="name"/><br/>
        Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="email"/><br/>
        Address:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="address"/><br/>
        Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="phone"/><br/>
        Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="fax"/><br/>
        Other Info:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="otherinformation"/><br/>
        Tin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="tin"/><br/>
        <a href="{(http://moneto.com/Save)}">Save</a>&nbsp;&nbsp;<a href="{(http://moneto.com/Cancel)}">Cancel</a>
<br/>
        
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Fax</th>
    <th>Tin</th>
    <th>Status</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Microsoft</td>
    <td>microsoft@microsoft.com</td>
    <td>US</td>
    <td>+1 123 456 7891</td>
    <td>+1 123 456 7892</td>
    <td>US1234567</td>
    <td>KYC Pending</td>
    <td><a href={("http://moneto.com")}> Upload</a></td>
    <td><a href={("http://moneto.com")}>Edit</a></td>
  </tr>
  <tr>
    <td>Google</td>
    <td>google@google.com</td>
    <td>US</td>
    <td>+1 223 456 7891</td>
    <td>+1 223 456 7892</td>
    <td>US2234567</td>
    <td>Inactive</td>
    <td></td>
    <td><a href={("http://moneto.com")}>Edit</a></td>
  </tr>
  <tr>
    <td>Amazon</td>
    <td>amazon@amazon.com</td>
    <td>US</td>
    <td>+1 323 456 7891</td>
    <td>+1 323 456 7892</td>
    <td>US3234567</td>
    <td>Active</td>
    <td></td>
    <td><a href={("http://moneto.com")}>Edit</a></td>
  </tr>
</table>
      </div>
    );
  }
}
export default Companies;