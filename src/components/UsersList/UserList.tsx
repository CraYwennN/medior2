//component checks if users is array then either UserList error or loading
import getUsers from './GetUsers';
import UserListClient from './UserListClient';

async function UserList(): Promise<React.JSX.Element> {
  try {
    const { users } = await getUsers();

    if (Array.isArray(users)) {
      return (
       <UserListClient users = {users}/>
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  } catch (error) {
    return (
      <div>
        <p>Error: {(error as Error).message}</p>
      </div>
    );
  }
}
export default UserList;

