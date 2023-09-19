import React, { useContext, useEffect } from "react";
import BookingContext from "../../context/bookings/BookingContext";

const BookingList = () => {
  const { bookings, getBookings } = useContext(BookingContext);

  useEffect(() => {
    getBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Booking List</h5>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <table
              id="bookings-table"
              className="table"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Residence</th>
                  <th>Resident</th>
                  <th>Type</th>
                  <th>Resident Ph</th>
                  <th>Price</th>
                  <th>Booking Date</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <td className="text-center">{index + 1}</td>
                    <td>{booking.ResidenceName}</td>
                    <td>{booking.Resident}</td>
                    <td>{booking.Type}</td>
                    <td>{booking.ResidentPhone}</td>
                    <td>Rs.{booking.Price} {booking.PriceType}</td>
                    <td className="text-center">
                      {new Date(booking.Date).toLocaleDateString()}
                    </td>
                    <td className="text-center">
                      {booking.Status === "Pending" && (
                        <span className="badge bg-label-info me-1">
                          Pending
                        </span>
                      )}
                      {booking.Status === "Approved" && (
                        <span className="badge bg-label-success me-1">
                          Approved
                        </span>
                      )}
                      {booking.Status === "Rejected" && (
                        <span className="badge bg-label-danger me-1">
                          Rejected
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="d-flex justify-content-around">
                        <a
                          href="/Bookings/Approved?Id=@bookings.Id"
                          className={`btn btn-icon btn-sm btn-outline-success
                                            ${
                                              bookings.Status === "Approved"
                                                ? "disabled"
                                                : ""
                                            }`}
                          data-bs-toggle="tooltip"
                          data-bs-offset="0,4"
                          data-bs-placement="top"
                          data-bs-html="true"
                          title=""
                          data-bs-original-title="<i className='bx bx-check-square bx-xs'></i> <span>Approve</span>"
                        >
                          <span className="tf-icons bx bx-check-square"></span>
                        </a>
                        <a
                          href="/Bookings/Rejected?Id=@bookings.Id"
                          className={`btn btn-icon btn-sm btn-outline-warning mx-2
                                            ${
                                              bookings.Status === "Rejected"
                                                ? "disabled"
                                                : ""
                                            }`}
                          data-bs-toggle="tooltip"
                          data-bs-offset="0,4"
                          data-bs-placement="top"
                          data-bs-html="true"
                          title=""
                          data-bs-original-title="<i className='bx bx-x-circle bx-xs'></i> <span>Reject</span>"
                        >
                          <span className="tf-icons bx bx-x-circle"></span>
                        </a>
                        <a
                          href="/Bookings/Delete?Id=@bookings.Id"
                          className="btn btn-icon btn-sm btn-outline-danger"
                          data-bs-toggle="tooltip"
                          data-bs-offset="0,4"
                          data-bs-placement="top"
                          data-bs-html="true"
                          title=""
                          data-bs-original-title="<i className='bx bx-trash bx-xs'></i> <span>Delete</span>"
                        >
                          <span className="tf-icons bx bx-trash"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
