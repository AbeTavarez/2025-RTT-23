import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function UserProfilePage() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <main className="p-5 flex justify-center items-center">
      <div>
        {!user && (
          <>
            <h1>Please Sign in</h1>
            <button onClick={login}>Login</button>
          </>
        )}
      </div>

      <div>
        {user && (
          <>
            <h1>{user.firstName} 's Profile</h1>
            <button className="btn-primary" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </main>
  );
}

export default UserProfilePage;
