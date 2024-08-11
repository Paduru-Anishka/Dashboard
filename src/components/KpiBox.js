import React from 'react';

const KpiBox = ({ label, value }) => {
  return (
    <div className="kpi-box">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KpiBox;
