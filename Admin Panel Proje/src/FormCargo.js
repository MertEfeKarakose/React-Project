import PageHeaderTop from "./PageHeaderTop";
import PageHeaderMenu from "./PageHeaderMenu";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormCargo() {
  const [cargoStatus, setCargoStatus] = useState([]);
  const [cargoNo, setCargoNo] = useState([]);
  const [cargoCompany, setCargoCompany] = useState([]);
  const [resultMessage, setResultMessage] = useState("");
  const [formData, setFormData] = useState({
    OrderNo: "",
    CargoDate: "",
    DeliveryDate: "",
    CargoStatus: "",
    CargoCompany: "",
  });

  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargostatus")
      .then((response) => setCargoStatus(response.data.CargoStatusList || []))
      .catch((error) => console.error("Kargo durumu verisi çekme hatası:", error));
  }, []);

  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargono")
      .then((response) => setCargoNo(response.data.CargoNoList || []))
      .catch((error) => console.error("Sipariş numarası verisi çekme hatası:", error));
  }, []);

  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/cargocompany")
      .then((response) => setCargoCompany(response.data.CargoCompanyList || []))
      .catch((error) => console.error("Kargo firması verisi çekme hatası:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://private-6cf67-mertefekarakose.apiary-mock.com/cargoform",
        formData
      );
      if (response.status === 201 && response.data.Result === "İşlem Başarılı") {
        setResultMessage("✅ Kargo başarıyla eklendi.");
      } else {
        setResultMessage("❌ Kargo eklenirken hata oluştu.");
      }
    } catch (error) {
      console.error("POST isteği hatası:", error);
      setResultMessage("⚠️ Sunucu hatası: Kargo eklenemedi.");
    }
  };

  return (
    <div>
      <div className="page-header">
        <PageHeaderTop />
        <PageHeaderMenu />
      </div>
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li><a href="#">Ana Sayfa</a><i className="fa fa-circle" /></li>
              <li><a href="FormOrder.html">Sipariş Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Yeni Kargo</li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">Kargo Kayıt Formu</span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Sipariş No</label>
                          <div className="col-md-9">
                            <select className="form-control" name="OrderNo" value={formData.OrderNo} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {cargoNo.map((item) => (
                                <option key={item.CargoNoID} value={item.CargoNo}>{item.CargoNo}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo Tarihi</label>
                          <div className="col-md-9">
                            <input type="date" name="CargoDate" value={formData.CargoDate} onChange={handleChange} className="form-control" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Teslim Tarihi</label>
                          <div className="col-md-9">
                            <input type="date" name="DeliveryDate" value={formData.DeliveryDate} onChange={handleChange} className="form-control" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo Durumu</label>
                          <div className="col-md-9">
                            <select className="form-control" name="CargoStatus" value={formData.CargoStatus} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {cargoStatus.map((item) => (
                                <option key={item.CargoStatusID} value={item.CargoStatusName}>{item.CargoStatusName}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Kargo Firması</label>
                          <div className="col-md-9">
                            <select className="form-control" name="CargoCompany" value={formData.CargoCompany} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {cargoCompany.map((item) => (
                                <option key={item.CargoCompanyID} value={item.CargoCompanyName}>{item.CargoCompanyName}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-actions right">
                          <button type="submit" className="btn green">Kaydet</button>
                        </div>
                        {resultMessage && (
                          <div className="alert alert-info" style={{ marginTop: "10px" }}>
                            {resultMessage}
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default FormCargo;