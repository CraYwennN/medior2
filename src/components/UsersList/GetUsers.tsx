//function to get all Users
import publicRuntimeConfig from '@/utils/config';
import { Users } from '../Types/Types';
const { usersUrl } = publicRuntimeConfig; // toto bych volal přímo ve funkci

// try catch už tady
// if (res.ok) { …
async function getUsers(): Promise<Users> {
  const res = await fetch(usersUrl);
  const response = res.json();
  return response;
}
export default getUsers;
