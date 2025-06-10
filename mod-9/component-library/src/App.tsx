// import './App.css'
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740'
};

function App() {
  return (
    <>
      <h1 className="text-6xl mb-10 text-center">Components Library</h1>

      {/* ALERT BOX */}
      <section>
        <h2 className="text-3xl mb-10 text-center">Alert Box</h2>
        <AlertBox type="success" message="Hello World" />
        <AlertBox type="error" message="Hello World" />
        <AlertBox type="info" message="Hello World" />
        <AlertBox type="warning" message="Hello World" />
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      </section>

      {/* USER PROFILE CARD  */}
      <section className="mt-10 flex flex-col items-center">
        
        <h2 className="text-3xl mb-10 text-center">Product Display</h2>

        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        />

        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
      </UserProfileCard>

      </section>
    </>
  );
}

export default App;
