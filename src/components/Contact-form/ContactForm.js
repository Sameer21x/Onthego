"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Contact-form/ContactForm.css";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    try {
      toast.dismiss(); // Dismiss any active toast notifications
  
      const response = await fetch("http://localhost:5000/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Log response status and body for debugging
      console.log('Response Status:', response.status);
      console.log('Response Body:', await response.text());
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      toast.success("Your message has been sent successfully!");
      event.currentTarget.reset();
  
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