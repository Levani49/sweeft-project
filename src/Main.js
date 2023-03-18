import React from "react";
import UserList from "./UserList";

export default function Main() {
  return (
    <UserList
      url={"http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"}
    />
  );
}
