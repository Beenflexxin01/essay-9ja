import React from "react";
import { format, parseISO } from "date-fns";

const DateUpdateFormatter = ({ updatedAt }) => {
  const formatDate = (dateStr) => {
    try {
      // Parse the ISO date string into a Date object
      const parsedDate = parseISO(dateStr);

      // Format the Date object into a more readable format
      return format(parsedDate, "MMMM dd, yyyy, HH:mm");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedUpdatedAt = formatDate(updatedAt);
  //   const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <div>
      <p>{formattedUpdatedAt}</p>
    </div>
  );
};

export default DateUpdateFormatter;
