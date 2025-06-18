// interface User {
//     id: Number;
//     name: string;
//     email: String;

// }

// interface UserProfileCardProps {
//   user: User;
// }


function UserProfileCard({user}) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  );
}

export default UserProfileCard;
