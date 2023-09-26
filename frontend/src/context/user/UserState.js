import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import AlertContext from "../../context/alerts/AlertContext";

const UserState = (props) => {
  const [user, setUser] = useState({});
  const { showAlert } = useContext(AlertContext);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const userData = await response.json();
      setUser(userData); // Update the user state with the fetched data
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/updateuser/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(updatedData),
        }
      );

      let data = await response.json();

      if (data.type === "success") {
        showAlert(data.message, data.type);
      } else {
        showAlert(data.message, data.type);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/deleteuser/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          }
        }
      );

      let data = await response.json();

      if (data.type === "success") {
        showAlert(data.message, data.type);
      } else {
        showAlert(data.message, data.type);
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, getUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
