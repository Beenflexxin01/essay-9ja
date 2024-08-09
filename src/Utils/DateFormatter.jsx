import React from "react";
import { formatDistanceToNow, parseISO, format } from "date-fns";

export function DateFormatter({ createdAt }) {
  const formatDate = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "dd/MM/yyyy");
    } catch (error) {
      console.log("Error formatting date:", error);
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

      return format(parsedDate, "dd/MM/yyyy");
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

export function LastLoginAt({ createdAt }) {
  const formatDate = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "dd/MM/yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedUpdatedAt = formatDate(createdAt);

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
      // return formatDistanceToNow(parsedDate, "hh:mmaaa");
    } catch (error) {
      console.error("Error formatting date:", error.message, error);
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

export function DistanceFormtatter({ createdAt }) {
  const formatTime = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return formatDistanceToNow(parsedDate, { addSuffix: true });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedTime = formatTime(createdAt);

  return (
    <>
      <p>{formattedTime}</p>
    </>
  );
}

export function LastLoginAtDistance({ createdAt }) {
  const formatTime = (dateStr) => {
    try {
      const parsedDate = parseISO(dateStr);

      return format(parsedDate, "hh:mm aaa");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  const formattedTime = formatTime(createdAt);

  return (
    <>
      <p>{formattedTime}</p>
    </>
  );
}
