import { useContext } from "react";
import { RequestContext } from "../context/RequestContext";

function Payment() {
  const { requests, updateStatus } = useContext(RequestContext);

  const handlePayment = (id) => {
    alert("Payment successful!");
    updateStatus(id, "Activated");
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <h2 className="text-3xl font-bold mb-4 text-ethioBlue">Payment Page</h2>
      <table className="min-w-full border text-center bg-white shadow rounded">
        <thead className="bg-ethioBlue text-white">
          <tr>
            <th className="p-2">Request ID</th>
            <th className="p-2">Customer</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(r => (
            <tr key={r.id} className="border-t hover:bg-gray-100">
              <td className="p-2">{r.id}</td>
              <td className="p-2">{r.name}</td>
              <td className="p-2">1000 ETB</td>
              <td className="p-2">
                <button onClick={()=>handlePayment(r.id)} className="bg-ethioBlue text-white p-1 rounded hover:bg-blue-800">
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payment;
