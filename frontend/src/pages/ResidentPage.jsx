import { useState } from "react";
import API from "../services/bookingApi";

function ResidentPage() {
  const [formData, setFormData] = useState({
  customerName: "",
  mobile: "",
  unitNumber: "",
  service: "",
  bookingDate: "",
  timeSlot: "",
});
const [loading, setLoading] = useState(false);
const handleChange = (e) => {
  console.log("FIELD:", e.target.name);
  console.log("VALUE:", e.target.value);

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  width: "100%",
  boxSizing: "border-box",
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
      setLoading(true);
    try {
      await API.post("", {
        ...formData,
        status: "Pending",
      });

        alert(
            "✅ Booking Created Successfully!\n\nYour request has been submitted."
        );
      setLoading(false);
      setFormData({
  customerName: "",
  mobile: "",
  unitNumber: "",
  service: "",
  bookingDate: "",
  timeSlot: "",
});
    } catch (error) {
  console.error(error);

  alert(
    "Error: " +
    (error.response?.data?.message ||
     error.response?.data ||
     error.message)
  );

  setLoading(false);
}
  };
  
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
  <h1>🏠 Skippr Service Booking</h1>

  <p>Book your cleaning service in a few clicks</p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      marginTop: "15px",
      fontWeight: "500",
    }}
  >
    <span>🚗 Car Cleaning</span>
    <span>🚿 Washroom Cleaning</span>
    <span>🧹 Deep Cleaning</span>
  </div>
</div>
      <form
        onSubmit={handleSubmit}
        style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
    >
        <label>Customer Name</label>
        <input
  type="text"
  name="customerName"
  placeholder="Customer Name"
  value={formData.customerName}
  onChange={handleChange}
  style={inputStyle}
  onFocus={(e) => {
  e.target.style.border = "2px solid #2563eb";
}}

onBlur={(e) => {
  e.target.style.border = "1px solid #d1d5db";
}}
  required
/>
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          pattern="[0-9]{10}"
          maxLength="10"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => {
  e.target.style.border = "2px solid #2563eb";
}}

onBlur={(e) => {
  e.target.style.border = "1px solid #d1d5db";
}}
          required
        />
<label>House Number</label>
<input
  type="text"
  name="unitNumber"
  value={formData.unitNumber}
  onChange={(e) => {
    console.log("INPUT NAME =", e.target.name);
    console.log("INPUT VALUE =", e.target.value);

    setFormData({
      ...formData,
      unitNumber: e.target.value,
    });
  }}
  placeholder="House Number"
  style={inputStyle}
  required
/>
<label>Select Service</label>
<select
  name="service"
  value={formData.service}
  onChange={handleChange}
  style={inputStyle}
  onFocus={(e) => {
  e.target.style.border = "2px solid #2563eb";
}}

onBlur={(e) => {
  e.target.style.border = "1px solid #d1d5db";
}}
  required
>

<option value="">Select Service</option>
<option value="Car Cleaning">🚗 Car Cleaning</option>
<option value="Washroom Cleaning">🚿 Washroom Cleaning</option>
<option value="Deep Cleaning">🧹 Deep Cleaning</option>
</select>
        <label>Booking Date</label>
        <input
        type="date"
        name="bookingDate"
        value={formData.bookingDate}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        style={inputStyle}
        onFocus={(e) => {
  e.target.style.border = "2px solid #2563eb";
}}

onBlur={(e) => {
  e.target.style.border = "1px solid #d1d5db";
}}
        required
        />
        <label>Time Slot</label>
        <select
  name="timeSlot"
  value={formData.timeSlot}
  onChange={handleChange}
  style={inputStyle}
  onFocus={(e) => {
  e.target.style.border = "2px solid #2563eb";
}}

onBlur={(e) => {
  e.target.style.border = "1px solid #d1d5db";
}}
  required
>
  <option value="">Select Time Slot</option>
  <option value="08:00 AM">08:00 AM</option>
  <option value="09:00 AM">09:00 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="02:00 PM">02:00 PM</option>
  <option value="04:00 PM">04:00 PM</option>
  <option value="06:00 PM">06:00 PM</option>
</select>

        <button
  type="submit"
  disabled={loading}
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    opacity: loading ? 0.7 : 1,
  }}
>
  {loading ? "Booking..." : "📅 Book Service"}
</button>
      </form>
    </div>
  );
}

export default ResidentPage;