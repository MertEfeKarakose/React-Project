import PageHaderTop from "./PageHeaderTop";
import PageHaderMenu from "./PageHeaderMenu";
import PageHead from "./PageHead";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListProduct () {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/productlist")
            .then((response) => setProducts(response.data.Products))
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
                  <a href="FormProduct.html">Ürün Yönetimi</a>
                  <i className="fa fa-circle" />
                </li>
                <li className="active">
                  Ürün Listesi
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
                        <span className="caption-subject font-green-sharp bold">Ürün Listesi</span>
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
                              Ürün ID
                            </th>
                            <th width="20%">
                            Ürünün Adı
                            </th>
                            <th>
                              Kategori
                            </th>
                            <th>
                              Stok Durumu
                            </th>
                            <th>
                              Fiyat
                            </th>
                            <th>
                              Para Birimi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.ProductID}>
                              <td>{product.ProductID}</td>
                              <td>{product.ProductName}</td>
                              <td>{product.Category}</td>
                              <td>{product.StockStatus}</td>
                              <td>{product.Price}</td>
                              <td>{product.Currency}</td>
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
  export default ListProduct;