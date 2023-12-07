
import Header from "../components/Header";

import UserRow from "../components/UserRow";

const Users = () => {
 
  return (
    <div>
      <Header />
      <div className="container mx-auto">
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
              <UserRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
