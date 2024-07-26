import React from "react";
import { format, parseISO } from "date-fns";

const DateFormatter = ({ createdAt }) => {
  const formatDate = (dateStr) => {
    try {
      // Parse the ISO date string into a Date object
      const parsedDate = parseISO(dateStr);

      // Format the Date object into a more readable format
      return format(parsedDate, "MM / dd / yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedCreatedAt = formatDate(createdAt);
  //   const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <>
      <p>{formattedCreatedAt}</p>
    </>
  );
};

export default DateFormatter;

// Usage example
// <DateFormatter createdAt="2024-06-30T16:49:31.084Z" updatedAt="2024-06-30T17:18:59.031Z" />
