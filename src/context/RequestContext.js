import { createContext, useState } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  const addRequest = (req) =>
    setRequests((prev) => [...prev, { ...req, id: Date.now(), status: "Pending" }]);

  const updateStatus = (id, status) =>
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );

  const updateRequestTechnician = (id, technician) =>
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, technician, status: "Assigned" } : r))
    );

  return (
    <RequestContext.Provider value={{ requests, addRequest, updateStatus, updateRequestTechnician }}>
      {children}
    </RequestContext.Provider>
  );
};
