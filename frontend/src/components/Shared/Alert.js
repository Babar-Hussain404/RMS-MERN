import React, { useContext } from "react";
import AlertContext from "../../context/alerts/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext)

  const capitalize = (word) => {
    if(word === "danger"){
      word = "error";
      
    }else if(word === "info"){
      word = "Message";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className='mx-4 mt-2'>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade
          show`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
