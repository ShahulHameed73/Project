import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function PurchaseHistory() {
  const purchaseHistory = useSelector((state) => state.purchaseHistory);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p className="text-center">No purchase history available.</p>
      ) : (
        <div className="list-group">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="list-group-item mb-3">
              <h4 className="fw-bold">Purchase Date: {purchase.date}</h4>
              <ul className="list-group list-group-flush">
                {purchase.items.map((item, idx) => (
                  <li key={idx} className="list-group-item">
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="fw-bold mt-2">Total Amount Paid: ${purchase.totalDiscount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PurchaseHistory;

