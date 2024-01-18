import {useEffect, useState} from "react";
import {UserInfoResponse} from "@/common";
import {UserService} from "@/common/services/user-service.ts";

const UsersPage = () => {
  const [users, setUsers] = useState<UserInfoResponse[]>([])

  useEffect(() => {
    UserService.getAllUsers().then(setUsers)
  }, []);
  return (
    <>
      {users?.map(user =>
        <section key={user.id}>
          <h2>{user.email}</h2>
          <h2>{user.password}</h2>
        </section>
      )}
    </>
  );
};

export {UsersPage};