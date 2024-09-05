import { User } from "@/interfaces";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600">@{user.username}</p>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold">Email:</p>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold">Address:</p>
          <p className="text-gray-600">
            {user.address.street}, {user.address.suite}, {user.address.city} -{" "}
            {user.address.zipcode}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold">Phone:</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold">Website:</p>
          <a href={`http://${user.website}`} className="text-blue-500">
            {user.website}
          </a>
        </div>

        <div className="mt-4">
          <p className="text-gray-800 font-semibold">Company:</p>
          <p className="text-gray-600">{user.company.name}</p>
          <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Contact {user.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;