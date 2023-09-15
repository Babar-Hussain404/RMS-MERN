import React, { useState } from "react";

const BookingList = () => {
  const [booking, setBooking] = useState({
    ResidenceName: "hex palace",
    Resident: "Ali",
    ResidentPhone: "03112345678",
    Type: "Hotel",
    Price: 500,
    PriceType:"/Month",
    Date: new Date(),
    Status: "Rejected",
  });

  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="card">
        <h5 class="card-header">Booking List</h5>
        <div class="card-body">
          <div class="table-responsive text-nowrap">
            <table id="booking-table" class="table" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Residence</th>
                  <th>Resident</th>
                  <th>Type</th>
                  <th>Resident Ph</th>
                  <th>Price</th>
                  <th>Booking Date</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td>{booking.ResidenceName}</td>
                  <td>{booking.Resident}</td>
                  <td>{booking.Type}</td>
                  <td>{booking.ResidentPhone}</td>
                  <td>Rs.{booking.PricePerDay}</td>
                  <td class="text-center">
                    {new Date(booking.Date).toLocaleDateString()}
                  </td>
                  <td class="text-center">
                    {booking.Status === "Pending" && (
                      <span class="badge bg-label-info me-1">Pending</span>
                    )}
                    {booking.Status === "Approved" && (
                      <span class="badge bg-label-success me-1">Approved</span>
                    )}
                    {booking.Status === "Rejected" && (
                      <span class="badge bg-label-danger me-1">Rejected</span>
                    )}
                  </td>
                  <td>
                    <div class="d-flex justify-content-around">
                      <a
                        href="/Bookings/Approved?Id=@booking.Id"
                        class={`btn btn-icon btn-sm btn-outline-success
                                            ${
                                              booking.Status === "Approved"
                                                ? "disabled"
                                                : ""
                                            }`}
                        data-bs-toggle="tooltip"
                        data-bs-offset="0,4"
                        data-bs-placement="top"
                        data-bs-html="true"
                        title=""
                        data-bs-original-title="<i class='bx bx-check-square bx-xs'></i> <span>Approve</span>"
                      >
                        <span class="tf-icons bx bx-check-square"></span>
                      </a>
                      <a
                        href="/Bookings/Rejected?Id=@booking.Id"
                        class={`btn btn-icon btn-sm btn-outline-warning mx-2
                                            ${
                                              booking.Status === "Rejected"
                                                ? "disabled"
                                                : ""
                                            }`}
                        data-bs-toggle="tooltip"
                        data-bs-offset="0,4"
                        data-bs-placement="top"
                        data-bs-html="true"
                        title=""
                        data-bs-original-title="<i class='bx bx-x-circle bx-xs'></i> <span>Reject</span>"
                      >
                        <span class="tf-icons bx bx-x-circle"></span>
                      </a>
                      <a
                        href="/Bookings/Delete?Id=@booking.Id"
                        class="btn btn-icon btn-sm btn-outline-danger"
                        data-bs-toggle="tooltip"
                        data-bs-offset="0,4"
                        data-bs-placement="top"
                        data-bs-html="true"
                        title=""
                        data-bs-original-title="<i class='bx bx-trash bx-xs'></i> <span>Delete</span>"
                      >
                        <span class="tf-icons bx bx-trash"></span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
