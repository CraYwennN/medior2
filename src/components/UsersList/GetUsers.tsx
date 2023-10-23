//function to get all Users
import publicRuntimeConfig from '@/utils/config';
import { Users } from '../Types/Types';
const { usersUrl } = publicRuntimeConfig;

async function getUsers(): Promise<Users> {
  const res = await fetch(usersUrl);
  const response = res.json();
  return response;
}
export default getUsers;
