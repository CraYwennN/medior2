import { ReactElement } from 'react';
import UserList from '../UsersList/UserList';
// Proč je to obaleno v divu?
const Home = (): ReactElement => (
  <div>
    <UserList />
  </div>
);

export default Home;
