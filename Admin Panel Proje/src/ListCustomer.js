import Footer from "./Footer";
import PageHead from "./PageHead";
import PageHaderMenu from "./PageHeaderMenu";
import PageHaderTop from "./PageHeaderTop";
import PreFooter from "./PreFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListCustomer () {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/customerlist")
            .then((response) => setCustomers(response.data.Customers))
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);

    return (
      <div>
        <div className="page-header">
          {/* BEGIN HEADER TOP */}
          <PageHaderTop />
          {/* END HEADER TOP */}
          {/* BEGIN HEADER MENU */}
          <PageHaderMenu />
          {/* END HEADER MENU */}
        </div>
        {/* END HEADER */}
        {/* BEGIN PAGE CONTAINER */}
        <div className="page-container">
          {/* BEGIN PAGE HEAD */}
          <PageHead />
          {/* END PAGE HEAD */}
          {/* BEGIN PAGE CONTENT */}
          <div className="page-content">
            <div className="container">
              {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
              <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                      <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                      Widget settings form goes here
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn blue">Save changes</button>
                      <button type="button" className="btn default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
              {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
              {/* BEGIN PAGE BREADCRUMB */}
              <ul className="page-breadcrumb breadcrumb">
                <li>
                  <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
                </li>
                <li>
                  <a href="form_controls.html">Müşteri Yönetimi</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">
                  Müşteri Listesi
                </li>
              </ul>
              {/* END PAGE BREADCRUMB */}
              {/* BEGIN PAGE CONTENT INNER */}
              <div className="row">
                <div className="col-md-12">
                  {/* BEGIN SAMPLE TABLE PORTLET*/}
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption">
                        <span className="caption-subject font-green-sharp bold">Müşteri Listesi</span>
                      </div>
                      <div className="tools">
                        <a href="javascript:;" className="collapse">
                        </a>
                      </div>
                    </div>
                    <div className="portlet-body flip-scroll">
                      <table className="table table-bordered table-striped table-condensed flip-content">
                        <thead className="flip-content">
                          <tr>
                            <th>
                              ID
                            </th>
                            <th width="15%">
                              Ad
                            </th>
                            <th>
                              Soyad
                            </th>
                            <th>
                              Mail Adresi
                            </th>
                            <th>
                              GSM
                            </th>
                            <th>
                              Adres
                            </th>
                            <th>
                              Şehir
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          {customers.map((customer) => (
                            <tr key={customer.CustomerID}>
                              <td>{customer.CustomerID}</td>
                              <td>{customer.FirstName}</td>
                              <td>{customer.LastName}</td>
                              <td>{customer.Email}</td>
                              <td>{customer.Phone}</td>
                              <td>{customer.Address}</td>
                              <td>{customer.City}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* END PAGE CONTENT INNER */}
            </div>
          </div>
          {/* END PAGE CONTENT */}
        </div>
        {/* END PAGE CONTAINER */}
        {/* BEGIN PRE-FOOTER */}
        <PreFooter />
        {/* END PRE-FOOTER */}
        {/* BEGIN FOOTER */}
        <Footer />
      </div>
    );
  }
  export default ListCustomer;