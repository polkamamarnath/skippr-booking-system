import { useEffect, useState } from "react";
import API from "../services/bookingApi";
import SummaryCards from "../components/SummaryCards";
import BookingTable from "../components/BookingTable";

function AdminPage() {
  const [bookings, setBookings] = useState([]);

  const [summary, setSummary] = useState({
    total: 0,
    pending: 0,
    assigned: 0,
    completed: 0,
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const fetchData = async () => {
    try {
      const bookingsResponse = await API.get("");
      const summaryResponse = await API.get("/summary");

      setBookings(bookingsResponse.data);
      setSummary(summaryResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.customerName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
    <div style={{ marginBottom: "30px" }}>
      <h1>🏠 Skippr Service Booking System</h1>
        <p>Resident Service Management Dashboard</p>
    </div>
      <SummaryCards summary={summary} />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Assigned">Assigned</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {filteredBookings.length > 0 ? (
      <BookingTable
        bookings={filteredBookings}
        refreshBookings={fetchData}
      />
      ) : (
        <div
          style={{
          padding: "40px",
          background: "white",
          borderRadius: "15px",
          textAlign: "center",
        }}
        >
    <h3>🔍 No bookings found</h3>
  </div>
)}
    </div>
  );
}

export default AdminPage;