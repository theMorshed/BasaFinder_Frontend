/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchLandlordRequests, updateRequest } from "@/redux/features/rental/rentalAPI";

// Define the type for a rental request
interface IRentalRequest {
    _id: string;
    tenant: string;  // Assuming tenant is an ID, you might want to display the name later
    house: string;   // House is also an ID, you can fetch the house details later
    landlord: string;
    moveInDate: Date;
    rentalDuration: string;
    status: "pending" | "approved" | "rejected" | "approved-pending-payment" | "rented";
    paymentStatus: "pending" | "paid" | "cancelled";
}

const TenantRequestsTable = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [landlordRequests, setLandlordRequests] = useState<IRentalRequest[]>([]);
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        // Fetch the users on component mount
        async function fetchAllLandlordRequests() {
            const response = await dispatch(fetchLandlordRequests(user?.id as string));
            setLandlordRequests(response); // Assuming response is an array of requests
        }

        fetchAllLandlordRequests();
    }, [dispatch, user?.id]);

    const handleRequestStatus = async (requestId: string, status: string) => {
        try {
            const updatedRequest = await dispatch(updateRequest(requestId, status ));
            setLandlordRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request._id === requestId ? { ...request, status: updatedRequest.status } : request
                )
            );
            alert("status updated successfully!");
        } catch (error) {
            console.error("Error updating status", error);
        }
    };    

    return (
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Tenant Requests</h1>
        <table className="min-w-full table-auto">
            <thead>
            <tr className="text-left">
                <th className="border px-4 py-2">Tenant</th>
                <th className="border px-4 py-2">House</th>
                <th className="border px-4 py-2">Move-In Date</th>
                <th className="border px-4 py-2">Rental Duration(months)</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Payment Status</th>
            </tr>
            </thead>
            <tbody>
            {landlordRequests?.map((request: any) => (
                <tr key={request._id}>
                <td className="border px-4 py-2">{request.tenant.name}</td>
                <td className="border px-4 py-2">{request.house.location}</td>
                <td className="border px-4 py-2">{new Date(request.moveInDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{request.rentalDuration}</td>
                <td className="border px-4 py-2">
                    <select
                        value={request.status}
                        onChange={(e) => handleRequestStatus(request._id, e.target.value)}
                        className="border px-4 py-2 rounded-md"
                     >
                        <option value={`${request.status}`}>{request.status}</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </td>
                <td className="border px-4 py-2">{request.paymentStatus}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default TenantRequestsTable;
