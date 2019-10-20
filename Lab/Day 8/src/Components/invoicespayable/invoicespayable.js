import React, { Component } from 'react';
import { Row, Col } from 'antd';

class InvoicesPayable extends Component {
  render() {
    return this.getTemplate();
  }

  getTemplate() {
    return (
      <div className='invoicespayable'>
        <Row gutter={5}>
          <Col span={24}>
            <div className="add2cart-sctitle">Invoices - Payable</div>
          </Col>
        </Row>
        <Row gutter={5}>
          <Col span={24}>
            <center>
              <h1>Invoices - Payable</h1>
            </center>
            <br /><br />
          </Col>
        </Row>
        
        <table>
          <tr width="100%">
              <td width="70%"><a href={("http://moneto.com")}>Create New </a>OR
                  <a href={("http://moneto.com")}>Upload</a>
                  <input type ="search" name ="filename" /> </td>
              <td>Search - </td>
              <td><input type ="search" name ="searchtext" /></td>
          </tr>
        <tr>
            <td>
                Payable To &nbsp; 
                <select name="PayableTo">
                    <option value="-1">--select--</option>
                    <option value="1">Microsoft</option>
                    <option value="2">Google</option>
                    <option value="3">Amazon</option>
                </select>                
            </td>
            <td>
                Invoice Date</td><td> <input type="datetime" name ="invoicedate" />
            </td>
        </tr>
    </table>
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <select name="item">
                <option value="-1">--select--</option>
                <option value="1">Windows 10 license</option>
                <option value="2">XBox</option>
                <option value="3">Office 365 license</option>
              </select>
            </td>
            <td><input type="text" name="price" /></td>
            <td><input type="text" name="quantity" /></td>
            <td><input type="text" name="total" /></td>
            <td><a href={("http://moneto.com")}>Add</a></td>
          </tr>
          <tr>
            <td>Windows 10 license</td>
            <td>USD 500</td>
            <td>5</td>
            <td>USD 2500</td>
            <td><a href={("http://moneto.com")}>Edit</a>&nbsp;
                <a href={("http://moneto.com")}>Remove</a></td>
          </tr>
          <tr>
            <td>XBox</td>
            <td>USD 1000</td>
            <td>3</td>
            <td>USD 3000</td>
            <td><a href={("http://moneto.com")}>Edit</a>&nbsp;
                <a href={("http://moneto.com")}>Remove</a></td>
          </tr>
        <tr>
            <td></td>
            <td>Tax: USD 550</td>
            <td>Grand Total: </td>
            <td>USD 5500</td>
            <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style={{marginRight:100}}></td>
          <td><a href={("http://moneto.com")}>Save</a>&nbsp;
          <a href={("http://moneto.com")}>Cancel</a></td>
        </tr>
        </table>
        <table>
          <tr>
            <th>Invoice#</th>
            <th>Invoice Date</th>
            <th>Payable To</th>
            <th>Grand Total</th>
            <th></th>
          </tr>
          <tr>
          <td>12345</td>
          <td>5th Oct 2019</td>
          <td>Amazon</td>
          <td>50000</td>
          <td><a href={("http://moneto.com")}>Edit</a>&nbsp;</td>
          </tr>
          <tr>
          <td>12346</td>
          <td>10th Oct 2019</td>
          <td>Google</td>
          <td>10000</td>
          <td><a href={("http://moneto.com")}>Edit</a>&nbsp;</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default InvoicesPayable;