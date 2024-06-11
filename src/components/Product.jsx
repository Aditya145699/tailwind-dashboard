import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div>
      <p>This is Product</p>
      <Link to="/dashboard" className="underline">Go to Dashboard</Link>
    </div>
  );
}
