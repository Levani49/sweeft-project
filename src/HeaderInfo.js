import React from "react";

export default function HeaderInfo({ userData }) {
  return (
    <div className="header">
      <img src={userData.imageUrl + "?v=" + userData.id} alt="" />
      <fieldset className="info-field">
        <legend>info</legend>
        <h2>{userData.name}</h2>
        <p style={{ marginBottom: "1rem" }}>{userData.title}</p>
        <p>
          <strong>Email</strong>: {userData.email}
        </p>
        <p>
          <strong>Ip address:</strong> {userData.ip}
        </p>
        <p>
          <strong>Job Area:</strong> {userData.jobArea}
        </p>
        <p>
          <strong>Job Type:</strong> {userData.jobType}
        </p>
      </fieldset>
      <fieldset className="address-field">
        <legend>Address</legend>
        <h3>
          {userData.company.name} <br />
          {userData.company.suffix}
        </h3>
        <p>
          <strong>City:</strong> {userData.address.city}
        </p>
        <p>
          <strong>Country:</strong> {userData.address.country}
        </p>
        <p>
          <strong>State:</strong> {userData.address.state}
        </p>
        <p>
          <strong>Zip:</strong> {userData.address.zipCode}
        </p>
      </fieldset>
    </div>
  );
}
