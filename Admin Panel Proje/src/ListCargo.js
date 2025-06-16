import Footer from "./Footer";
import PageHead from "./PageHead";
import PreFooter from "./PreFooter";
import PageHeaderTop from "./PageHeaderTop";
import PageHeaderMenu from "./PageHeaderMenu";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListCargo() {
    const [cargos, setCargos] = useState([]);

    useEffect(() => {
        axios.get("https://private-f2e779-itoapi.apiary-mock.com/cargo")
            .then((response) => setCargos(response.data.Cargos))
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);



    return (
        <div>
            {/* BEGIN HEADER */}
            <div className="page-header">
                {/* BEGIN HEADER TOP */}
                <PageHeaderTop />
                {/* END HEADER TOP */}
                {/* BEGIN HEADER MENU */}
                <PageHeaderMenu />
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
                        {/* BEGIN PAGE BREADCRUMB */}
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <a href="#">Ana Sayfa</a><i className="fa fa-circle" />
                            </li>
                            <li>
                                <a href="FormOrder.html">Sipariş Yönetimi</a>
                                <i className="fa fa-circle" />
                            </li>
                            <li className="active">
                                Kargo Listesi
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
                                            <span className="caption-subject font-green-sharp bold">Kargo Listesi</span>
                                        </div>
                                        <div className="tools">
                                            <a href="javascript:;" className="collapse"></a>
                                        </div>
                                    </div>
                                    <div className="portlet-body flip-scroll">
                                        <table className="table table-bordered table-striped table-condensed flip-content">
                                            <thead className="flip-content">
                                                <tr>
                                                    <th width="20%">Sipariş No</th>
                                                    <th>Kargo Tarihi</th>
                                                    <th>Teslim Tarihi</th>
                                                    <th>Kargo Durumu</th>
                                                    <th>Kargo Firması</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cargos.map((cargo) => (
                                                    <tr key={cargo.CargoNo}>
                                                        <td>{cargo.CargoNo}</td>
                                                        <td className="numeric">{cargo.CargoDate}</td>
                                                        <td className="numeric">{cargo.DeliveryDate}</td>
                                                        <td>{cargo.CargoStatus}</td>
                                                        <td>{cargo.CargoCompany}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* END SAMPLE TABLE PORTLET*/}
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
            {/* END FOOTER */}
        </div>
    );
}

export default ListCargo;
