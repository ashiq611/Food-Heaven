import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import { getAllUsers } from "../services/user";
import UserRow from "../components/UserRow";

const Users = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  if (isLoading) {
    return (
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <span className=" loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role Option</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
