/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers, createUser, updateUserRole, deleteUser } from "@/redux/features/user/userAPI"; // Modify according to your API
import { AppDispatch } from "@/redux/store";

interface User {
  _id: string;
  email: string;
  role: string;
  isBlocked: boolean;
}

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("user"); // Default role
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch the users on component mount
    async function fetchUsers() {
      const response = await dispatch(getUsers());
      setUsers(response); // Make sure your API returns the correct format
    }

    fetchUsers();
  }, [dispatch]);

//   const handleCreateUser = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await dispatch(createUser({ email: newUserEmail, role: newUserRole }));
//       setNewUserEmail("");
//       setNewUserRole("user"); // Reset after successful creation
//       alert("User created successfully!");
//     } catch (error) {
//       console.error("Error creating user", error);
//     }
//   };

  const handleDeactivateUser = async (userId: string, isBlocked: boolean) => {
    try {
      await dispatch(deleteUser(userId, isBlocked));
      //setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId)); // Remove user from local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isBlocked: isBlocked } : user
        )
      );      
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleUpdateUserRole = async (userId: string, role: string) => {
    try {
      await dispatch(updateUserRole(userId, role ));
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: role } : user
        )
      );
      alert("User role updated successfully!");
    } catch (error) {
      console.error("Error updating user role", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-sky-800">Manage Users</h1>
      
      {/* Create New User Form */}
      {/* <form onSubmit={handleCreateUser} className="mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="mt-4 py-2 px-4 bg-sky-800 text-white rounded-md">
          Create User
        </button>
      </form> */}

      {/* User List */}
      <h2 className="mt-8 text-xl font-semibold text-gray-700 dark:text-gray-300">User List</h2>
      <div className="mt-4">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Role</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={idx}>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleUpdateUserRole(user._id, e.target.value)}
                    className="border px-4 py-2 rounded-md"
                  >
                    {
                        (user?.role === "admin") ? 
                        (<>
                            <option value={`${user.role}`}>{user.role}</option>
                        </>) : 
                        ((user?.role === "tenant") ? 
                        <>
                            <option value={`${user.role}`}>{user.role}</option>
                            <option value="landlord">Landlord</option>
                        </> : 
                        <>
                            <option value={`${user.role}`}>{user.role}</option>
                            <option value="tenant">Tenant</option>
                        </>)
                    }
                    {/* <option value={`${user.role}`}>{user.role}</option>
                    <option value="tenanat">Tenant</option>
                    <option value="landlord">Landlord</option> */}
                  </select>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDeactivateUser(user._id, !user.isBlocked)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    {user?.isBlocked ? 'Activate' : 'Deactivate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
