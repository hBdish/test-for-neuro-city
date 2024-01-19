import {useEffect, useState} from "react";
import {UserCard, UserInfoResponse, useUserContext, VStack} from "@/common";
import {UserService} from "@/common/services/user-service.ts";

const UsersPage = () => {
  const [users, setUsers] = useState<UserInfoResponse[]>([])
  const {changeAuth} = useUserContext()

  useEffect(() => {
    UserService.getAllUsers()
      .then(setUsers)
      .catch(() => {
        changeAuth(false)
      })
  }, [changeAuth]);

  return (
    <VStack max align={"center"} gap={'8'}>
      {users?.map(user =>
        <UserCard key={user.id} password={user.password} email={user.email}/>
      )}
    </VStack>
  );
};

export {UsersPage};