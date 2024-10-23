import React from "react";

const DateFormatter = ({ dateString, titre, className }) => {
  const ladate = formateladate(dateString);

  return (
    <p className={className}>
      {titre} {ladate}
    </p>
  );
};

export default DateFormatter;

export function formateladate(dateString: any) {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  const ladate = day + "/" + month + "/" + year;
  return ladate;
}
