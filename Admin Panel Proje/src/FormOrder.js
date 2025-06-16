import Footer from "./Footer";
import PageHaderMenu from "./PageHeaderMenu";
import PageHaderTop from "./PageHeaderTop";
import PreFooter from "./PreFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormOrder() {
  const [orderCurrency, setOrderCurrency] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    Customer: "",
    ProductID: "",
    Quantity: "",
    UnitPrice: "",
    TotalPrice: "",
    Currency: "",
  });
  const [resultMessage, setResultMessage] = useState("");

  // Para birimi verilerini çek
  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/ordercurrency")
      .then((response) => setOrderCurrency(response.data.OrderCurrencyList || []))
      .catch((error) => console.error("Para birimi verisi çekme hatası:", error));
  }, []);

  // Müşteri listesini çek
  useEffect(() => {
    axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/customerlist")
      .then((response) => setCustomers(response.data.Customers || []))
      .catch((error) => console.error("Müşteri verisi çekme hatası:", error));
  }, []);

  // Input değişikliklerini takip et
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit işlemi (POST)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://private-6cf67-mertefekarakose.apiary-mock.com/order",
        formData
      );

      if (response.status === 201 && response.data.Result === "İşlem Başarılı") {
        setResultMessage("✅ Sipariş başarıyla eklendi.");
      } else {
        setResultMessage("❌ Sipariş eklenirken hata oluştu.");
      }
    } catch (error) {
      console.error("POST isteği hatası:", error);
      setResultMessage("⚠️ Sunucu hatası: Sipariş eklenemedi.");
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
              <li><a href="FormOrder.html">Sipariş Yönetimi</a><i className="fa fa-circle" /></li>
              <li className="active">Yeni Sipariş</li>
            </ul>
            <div className="row">
              <div className="col-md-12">
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">Sipariş Kayıt Formu</span>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Siparişi Veren</label>
                          <div className="col-md-9">
                            <select className="form-control" name="Customer" value={formData.Customer} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {customers.map((item) => (
                                <option key={item.CustomerID} value={item.FirstName + " " + item.LastName}>
                                  {item.FirstName} {item.LastName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Ürün ID</label>
                          <div className="col-md-9">
                            <input type="text" name="ProductID" value={formData.ProductID} onChange={handleChange} className="form-control input-sm" placeholder="Ürün ID Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Adet</label>
                          <div className="col-md-9">
                            <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} className="form-control input-sm" placeholder="Adet Bilgisi Giriniz..." required />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Birim Fiyat</label>
                          <div className="col-md-9">
                            <input type="number" name="UnitPrice" value={formData.UnitPrice} onChange={handleChange} className="form-control input-sm" placeholder="Birim Fiyatı Giriniz..." required />
                          </div>
                        </div>	
                        <div className="form-group">
                          <label className="col-md-3 control-label">Toplam Fiyat</label>
                          <div className="col-md-9">
                            <input type="number" name="TotalPrice" value={formData.TotalPrice} onChange={handleChange} className="form-control input-sm" placeholder="Toplam Fiyatı Giriniz..." required />
                          </div>
                        </div>	
                        <div className="form-group">
                          <label className="col-md-3 control-label">Para Birimi</label>
                          <div className="col-md-9">
                            <select className="form-control" name="Currency" value={formData.Currency} onChange={handleChange} required>
                              <option value="">Lütfen Seçim Yapınız</option>
                              {orderCurrency.map((item) => (
                                <option key={item.OrderCurrencyID} value={item.OrderCurrencyName}>{item.OrderCurrencyName}</option>
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

export default FormOrder;
