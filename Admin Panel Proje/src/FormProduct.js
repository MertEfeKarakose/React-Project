import Footer from "./Footer";
import PageHaderMenu from "./PageHeaderMenu";
import PageHaderTop from "./PageHeaderTop";
import PreFooter from "./PreFooter";
import React, { useEffect, useState } from "react";
import axios from "axios";

function FormProduct() {

    const [orderCategory, setOrderCategory] = useState([]);
    const [orderCurrency, setOrderCurrency] = useState([]);
    const [resultMessage, setResultMessage] = useState("");

    // Form verilerini saklamak için state
    const [formData, setFormData] = useState({
        ProductName: "",
        ProductID: "",
        CategoryID: "",
        Stock: "",
        Price: "",
        CurrencyID: "",
    });

    // API'den kategori verilerini çek
    useEffect(() => {
        axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/ordercategory")
            .then((response) => setOrderCategory(response.data.OrderCategoryList || []))
            .catch((error) => console.error("Kategori verisi çekme hatası:", error));
    }, []);

    // API'den para birimi verilerini çek
    useEffect(() => {
        axios.get("https://private-6cf67-mertefekarakose.apiary-mock.com/ordercurrency")
            .then((response) => setOrderCurrency(response.data.OrderCurrencyList || []))
            .catch((error) => console.error("Para birimi verisi çekme hatası:", error));
    }, []);

    // Formdaki input değişikliklerini yakalama
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // **POST İŞLEMİ**
    const handleSubmit = async (event) => {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        try {
            let requestBody = {
                ProductName: formData.ProductName,
                ProductID: formData.ProductID,
                CategoryID: formData.CategoryID,
                Stock: formData.Stock,
                Price: formData.Price,
                CurrencyID: formData.CurrencyID,
            };

            const response = await axios.post(
                "https://private-6cf67-mertefekarakose.apiary-mock.com/product",
                requestBody
            );

            if (response.data.Result === "İşlem Başarılı") {
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
                <li><a href="form_controls.html">Ürün Yönetimi</a><i className="fa fa-circle" /></li>
                <li className="active">Yeni Ürün Kayıt</li>
              </ul>

              <div className="row">
                <div className="col-md-12">
                  <div className="portlet light">
                    <div className="portlet-title">
                      <div className="caption">
                        <span className="caption-subject font-green-sharp bold">Ürün Kayıt Formu</span>
                      </div>
                    </div>
                    <div className="portlet-body form">
                      <form className="form-horizontal" onSubmit={handleSubmit}>
                        <div className="form-body">

                          <div className="form-group">
                            <label className="col-md-3 control-label">Ürünün Adı *</label>
                            <div className="col-md-9">
                              <input type="text" name="ProductName" value={formData.ProductName} onChange={handleChange}
                                className="form-control input-sm" placeholder="Ürün Adını Giriniz..." required />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-md-3 control-label">Ürün ID *</label>
                            <div className="col-md-9">
                              <input type="text" name="ProductID" value={formData.ProductID} onChange={handleChange}
                                className="form-control input-sm" placeholder="Ürün ID'sini Giriniz..." required />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-md-3 control-label">Kategori</label>
                            <div className="col-md-9">
                              <select className="form-control" name="CategoryID" value={formData.CategoryID} onChange={handleChange} required>
                                <option value="">*Lütfen Seçim Yapınız</option>
                                {orderCategory.map((item) => (
                                  <option key={item.OrderCategoryID} value={item.OrderCategoryID}>{item.OrderCategoryName}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-md-3 control-label">Stok Durumu *</label>
                            <div className="col-md-9">
                              <input type="number" name="Stock" value={formData.Stock} onChange={handleChange}
                                className="form-control input-sm" placeholder="Stok Durumunu Giriniz..." required />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-md-3 control-label">Fiyat</label>
                            <div className="col-md-9">
                              <input type="number" name="Price" value={formData.Price} onChange={handleChange}
                                className="form-control input-sm" placeholder="Fiyat Bilgisi Giriniz..." />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-md-3 control-label">Para Birimi</label>
                            <div className="col-md-9">
                              <select className="form-control" name="CurrencyID" value={formData.CurrencyID} onChange={handleChange} required>
                                <option value="">*Lütfen Seçim Yapınız</option>
                                {orderCurrency.map((item) => (
                                  <option key={item.OrderCurrencyID} value={item.OrderCurrencyID}>{item.OrderCurrencyName}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-actions right">
                            <button type="submit" className="btn green">Kaydet</button>
                          </div>

                          {/* SONUÇ MESAJI */}
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
  export default FormProduct;