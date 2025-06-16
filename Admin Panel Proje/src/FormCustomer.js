import Footer from "./Footer";
import PageHaderMenu from "./PageHeaderMenu";
import PageHaderTop from "./PageHeaderTop";
import PreFooter from "./PreFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormCustomer() {
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    CustomerName: "",
    CustomerSurname: "",
    Email: "",
    GSM: "",
    Address: "",
    City: "",
  });
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/city")
      .then((response) => setCities(response.data.CityList || []))
      .catch((error) => console.error("Veri çekme hatası:", error));
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
        "https://private-6cf67-mertefekarakose.apiary-mock.com/customer",
        formData
      );
      if (response.status === 201 && response.data.Result === "İşlem Başarılı") {
        setResultMessage("✅ Müşteri başarıyla eklendi.");
      } else {
        setResultMessage("❌ Müşteri eklenirken hata oluştu.");
      }
    } catch (error) {
      console.error("POST isteği hatası:", error);
      setResultMessage("⚠️ Sunucu hatası: Müşteri eklenemedi.");
    }
  };

  return (
    <div>
      <div className="page-header">
        <PageHaderTop />
        <PageHaderMenu />
      </div>
      <div className="page-container">
        <div className="page-content">
          <div className="container">
            <ul className="page-breadcrumb breadcrumb">
              <li><a href="#">Ana Sayfa</a><i className="fa fa-circle" /></li>
              <li><a href="form_controls.html">Müşteri Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Müşteri Kayıt Formu</li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">Müşteri Kayıt Formu</span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ad *</label>
                          <div className="col-md-9">
                            <input type="text" name="CustomerName" value={formData.CustomerName} onChange={handleChange} className="form-control input-sm" placeholder="Adınızı Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Soyad *</label>
                          <div className="col-md-9">
                            <input type="text" name="CustomerSurname" value={formData.CustomerSurname} onChange={handleChange} className="form-control input-sm" placeholder="Soyadınızı Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Mail Adresi *</label>
                          <div className="col-md-9">
                            <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="form-control input-sm" placeholder="adiniz@ymail.com" required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">GSM</label>
                          <div className="col-md-9">
                            <input type="text" name="GSM" value={formData.GSM} onChange={handleChange} className="form-control input-sm" placeholder="Telefon Numarası Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Adres</label>
                          <div className="col-md-9">
                            <textarea className="form-control" rows={3} name="Address" value={formData.Address} onChange={handleChange} required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Şehir</label>
                          <div className="col-md-9">
                            <select className="form-control" name="City" value={formData.City} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {cities.map((item) => (
                                <option key={item.CityID} value={item.CityID}>{item.CityName}</option>
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

export default FormCustomer;
