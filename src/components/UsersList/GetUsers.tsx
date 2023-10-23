//function to get all Users
import publicRuntimeConfig from '@/utils/config';
const { usersUrl } = publicRuntimeConfig;

async function getUsers(): Promise<unknown> {
  const res = await fetch(usersUrl);
  const response = res.json();
  return response;
}
export default getUsers;
