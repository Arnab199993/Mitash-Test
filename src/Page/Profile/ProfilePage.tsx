import { UserProfile } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
const ProfilePage = () => {
  const { signOut } = useClerk();
  return (
    <div>
      <UserProfile />

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfilePage;
