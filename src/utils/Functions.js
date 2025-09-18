import Swal from "sweetalert2";

// 6. Example: Capitalize first letter of string
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const sAlert = async (status, message) => {
    Swal.fire({
        icon: status,   // "success", "error", "warning", "info", "question"
        title: capitalize(status),
        text: message,
        confirmButtonColor: "#3085d6"
    });
};