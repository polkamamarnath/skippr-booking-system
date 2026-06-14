import API from "../services/bookingApi";

function BookingTable({ bookings, refreshBookings }) {

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/${id}/status`, {
        status: status,
      });

      refreshBookings();
    } catch (error) {
      console.error(error);
    }
  };

  if (bookings.length === 0) {
  return (
    <p style={{ textAlign: "center" }}>
      No bookings available yet.
    </p>
  );
}
  const deleteBooking = async (id) => {
    try {
      await API.delete(`/${id}`);
      refreshBookings();
    } catch (error) {
      console.error(error);
      alert("Failed to delete booking");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Booking No</th>
          <th>Customer</th>
          <th>Service</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>
              <strong>
                BK-{String(booking.id).padStart(3, "0")}
              </strong>
            </td>

            <td>{booking.customerName}</td>

            <td>
              {booking.service === "Car Cleaning" && "🚗 "}
              {booking.service === "Washroom Cleaning" && "🚿 "}
              {booking.service === "Deep Cleaning" && "🧹 "}
              {booking.service}
            </td>

            <td>{booking.bookingDate}</td>

            <td>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  color: "white",
                  fontWeight: "bold",
                  background:
                    booking.status === "Pending"
                      ? "#f59e0b"
                      : booking.status === "Assigned"
                      ? "#3b82f6"
                      : "#10b981",
                }}
              >
                {booking.status}
              </span>

              <br />
              <br />

              <select
                value={booking.status}
                onChange={(e) =>
                  updateStatus(booking.id, e.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="Assigned">Assigned</option>
                <option value="Completed">Completed</option>
              </select>
            </td>

            <td>
              <button
  onClick={() => {
    if (
      window.confirm(
        "Are you sure you want to delete this booking?"
      )
    ) {
      deleteBooking(booking.id);
    }
  }}
  style={{
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Delete
</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;