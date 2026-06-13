import React from "react";

function SummaryCards({ summary }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "25px",
        flexWrap: "wrap",
      }}
    >
      <div className="card">
        <h3>📋 Total</h3>
        <p>{summary.total}</p>
      </div>

      <div className="card">
        <h3>⏳ Pending</h3>
        <p>{summary.pending}</p>
      </div>

      <div className="card">
        <h3>👨‍🔧 Assigned</h3>
        <p>{summary.assigned}</p>
      </div>

      <div className="card">
        <h3>✅ Completed</h3>
        <p>{summary.completed}</p>
      </div>
    </div>
  );
}

export default SummaryCards;