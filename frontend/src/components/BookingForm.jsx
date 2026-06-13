import { useState } from "react";
import API from "../services/bookingApi";

function BookingForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    unitNumber: "",
    service: "",
    bookingDate: "",
    timeSlot: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("", formData);

      alert("Booking Created Successfully!");

      setFormData({
        customerName: "",
        mobile: "",
        unitNumber: "",
        service: "",
        bookingDate: "",
        timeSlot: ""
      });

    } catch (error) {
      console.error(error);
      alert("Failed to create booking");
    }
  };

  return (
    <div className="container">
      <h1>Skippr Service Booking</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          name="unitNumber"
          placeholder="Apartment/Villa Number"
          value={formData.unitNumber}
          onChange={handleChange}
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option value="Car Cleaning">Car Cleaning</option>
          <option value="Washroom Cleaning">Washroom Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
        </select>

        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
        />

        <input
          name="timeSlot"
          placeholder="Time Slot"
          value={formData.timeSlot}
          onChange={handleChange}
        />

        <button type="submit">
          Book Service
        </button>

      </form>
    </div>
  );
}

export default BookingForm;