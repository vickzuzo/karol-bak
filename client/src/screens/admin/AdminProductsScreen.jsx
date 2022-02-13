import React, { useState, useEffect } from "react";
import {
  AdminHeader,
  PageHeader,
  Footer,
  SectionHeader,
  Input,
  AlertBox,
  EditProductModal,
} from "../../components";
import apiClient from "../../query/api";
import { connect } from "react-redux";
import {
  setError,
  setSuccess,
  startLoading,
  stopLoading,
  updateSite,
  addProducts,
} from "../../state/actions";
import moment from "moment";

const AdminProductsScreen = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({});

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setSelectedImages([...files]);
    }
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  };
  const handlePriceChange = (e) => {
    const { value } = e.target;
    setPrice(value);
  };

  const handleFormShow = (e) => {
    e.preventDefault();
    setShowAddProductForm(!showAddProductForm);
  };
  const fetchAllProducts = async () => {
    try {
      props.startLoading();
      const { data } = await apiClient.get("/api/general/fetch_all_products");

      props.setSuccess("Updated Successfully");
      props.stopLoading();
      setTimeout(() => {
        props.addProducts(data.products);
        // console.log(data);
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("price", price);
      selectedImages.forEach((image) => {
        formdata.append("images", image);
      });

      await apiClient.post("/api/product/create_product", formdata);
      props.setSuccess("Product Added Successfully");
      setShowAddProductForm(false);
      fetchAllProducts();
      props.stopLoading();
      setTimeout(() => {
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };
  const onDeleteProduct = async (e, product) => {
    e.preventDefault();
    props.startLoading();

    try {
      await apiClient.post("/api/product/delete_product", { id: product._id });
      props.setSuccess("Product Deleted Successfully");
      setShowAddProductForm(false);
      fetchAllProducts();
      props.stopLoading();
      setTimeout(() => {
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };

  const handleModalOpen = (e, product) => {
    e.preventDefault();
    setData(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <AdminHeader />
      <PageHeader title="Products" />
      <div className="pageBody_80">
        <div className="admin_card">
          <AlertBox />
          <div className="input_container">
            <button className="input_button" onClick={handleFormShow}>
              {props.site.loading ? (
                <div className="auth_input_loader" />
              ) : showAddProductForm ? (
                "CANCEL"
              ) : (
                "ADD PRODUCT"
              )}
            </button>
          </div>

          {showAddProductForm && (
            <div className="pageBody_80">
              <form style={{ marginTop: "50px" }}>
                <Input
                  type="text"
                  onChange={handleTitleChange}
                  value={title}
                  title="Product Title"
                />
                <Input
                  type="text"
                  onChange={handleDescriptionChange}
                  value={description}
                  title="Product Description"
                />
                <Input
                  type="text"
                  onChange={handlePriceChange}
                  value={price}
                  title="Product Price"
                />
                <Input
                  onChange={handleImageChange}
                  type="file"
                  multiple
                  title="Product Images (can select multiple)"
                />
                <div className="add_product_images_preview_container">
                  {selectedImages.length > 0 &&
                    selectedImages.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt="product_preview"
                      />
                    ))}
                </div>
                <div className="input_container">
                  <button className="input_button" onClick={onSubmit}>
                    {props.site.loading ? (
                      <div className="auth_input_loader" />
                    ) : (
                      "SAVE PRODUCT"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div style={{ margin: "100px 0px" }}>
            <SectionHeader title="ALL PRODUCTS" />
          </div>
          <div className="review_overrall">
            <table className="review_container">
              <tr className="review_table_row">
                <th className="review_table_header">No.</th>
                <th className="review_table_header">Product Title</th>
                <th className="review_table_header">Product Description</th>
                <th className="review_table_header">Product Price</th>
                <th className="review_table_header">Product Images</th>
                <th className="review_table_header">Operation Time</th>
                <th className="review_table_header">Actions</th>
              </tr>
              {props.product.length >= 1 ? (
                props.product.map((product, i) => (
                  <tr key={i} className="review_table_row">
                    <td className="review_table_data">{i + 1}</td>
                    <td className="review_table_data">{product.title}</td>
                    <td className="review_table_data">{product.description}</td>
                    <td className="review_table_data">{product.price}</td>
                    <td className="review_table_data table_images_container">
                      {product.images.length > 0 &&
                        product.images.map((image, index) => (
                          <img src={image} alt="product" />
                        ))}
                    </td>

                    <td className="review_table_data">
                      {moment(product.createdAt).format("hh:mm A, DD-MM-YYYY")}
                    </td>
                    <td className="review_table_data">
                      <button
                        className="custom_button"
                        onClick={(e) => handleModalOpen(e, product)}
                      >
                        Edit
                      </button>
                      <button
                        className="custom_button"
                        onClick={(e) => onDeleteProduct(e, product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="review_table_row">
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                  <td className="review_table_data">No Data</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
      <Footer />
      <EditProductModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={data}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (text) => dispatch(setError(text)),
  setSuccess: (text) => dispatch(setSuccess(text)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  updateSite: (data) => dispatch(updateSite(data)),
  addProducts: (data) => dispatch(addProducts(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductsScreen);
