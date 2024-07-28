import React from "react";
import { format, parseISO } from "date-fns";

export function DateFormatter({ createdAt }) {
  const formatDate = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "MM/dd/yyyy", "");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedCreatedAt = formatDate(createdAt);

  return (
    <>
      <p>{formattedCreatedAt}</p>
    </>
  );
}

export function DateUpdateFormatter({ updatedAt }) {
  const formatDate = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "MM/dd/yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <>
      <p>{formattedUpdatedAt}</p>
    </>
  );
}

export function TimeFormatter({ updatedAt }) {
  const formatTime = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "hh:mmaaa");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedTime = formatTime(updatedAt);

  return (
    <>
      <p>{formattedTime}</p>
    </>
  );
}
