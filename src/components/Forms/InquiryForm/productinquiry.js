import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './productinquiry.css';

const ProductInquiry = () => {
  const location = useLocation();
  const product = location.state?.product || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rentalDate: '',
    message: '',
    productName: ''
  });

  useEffect(() => {
    // Update productName when component mounts or product changes
    setFormData(prevData => ({
      ...prevData,
      productName: product.name || ''
    }));
  }, [product.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://onthego-testingbackend.vercel.app/api/rentalinquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      toast.success('Your inquiry has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        rentalDate: '',
        message: '',
        productName: product.name || ''
      });
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="product-inquiry-container">
      <h2>Product Inquiry - {formData.productName}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            readOnly
          />
        </div>
        {/* Rest of the form fields remain the same */}
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rentalDate">Rental Start Date:</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Inquiry</button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductInquiry;