"use client";

import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Contact-form/ContactForm.css";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.target);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    try {
      toast.dismiss(); // Dismiss any active toast notifications
  
      const response = await fetch("https://onthego-testingbackend.vercel.app/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Log response status and body for debugging
      console.log('Response Status:', response.status);
      const responseText = await response.text();
      console.log('Response Body:', responseText);
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      toast.success("Your message has been sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
  
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error:", error); // Log the error for more details
    } finally {
      setIsLoading(false);
    }
  }
  
  
  

  return (
    <>
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>
            Name <span className="required">*</span>
          </label>
          <div className="name-fields">
            <div className="input-group">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                required 
              />
            </div>
            <div className="input-group">
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                required 
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Phone" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Comment or Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          className="submit-button"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  );
}