//component thats shows UserList
//and on click of button sets globalcontext to the specific user username
'use client';
import { ReactElement } from 'react';
// dvojitý import
// eslint-disable-next-line import/no-duplicates
import Link  from 'next/link';
// eslint-disable-next-line import/no-duplicates
import Button from 'next/link';
import { useGlobalContext } from '@/app/Context/globalContext';
import { User, Users } from '../Types/Types';
import style from './UsersList.module.css';

const UserListClient = ({ users }:Users):ReactElement => {
  const { setUser } = useGlobalContext();
  return (
    <div>
    <h1 className={style.maintitle}>Users</h1>
      <div className={style.list}>
        {/* Tady chybí komponenta user, která by v sobě měla komponenty (ty samé)
         UserInfo namapované na jednotlivé položky kupříkladu
         přes Object.keys a Array.prototype.map */}
      {users.map((user: User) => (
        <div className={style.box} key={user.id}>
          <div className={style.spacer}>
          <h2 className={style.head}>{user.name}</h2>

          <div className={style.username}>
            <span className={style.label}>Username:</span>
            <span className={style.value}>{user.username}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Email:</span>
            <span className={style.value}>{user.email}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Phone:</span>
            <span className={style.value}>{user.phone}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Website:</span>
            <span className={style.value}>{user.website}</span>
          </div>

          <div className={style.showAdress}>
            <h2 className={style.head}>Address</h2>
            {/* ten odkaz by měl mít target="_blank" */}
            <Link
            href={`https://mapy.cz/turisticka?source=coor&id=${user.address.geo.lng}%2C${user.address.geo.lat}&x=${user.address.geo.lng}&y=${user.address.geo.lat}&z=16`}
            className={style.button}
          >
            Show on map
          </Link>
            </div>
          <div className={style.userInfo}>
            <span className={style.label}>Street:</span>
            <span className={style.value}>{user.address.street}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Suite:</span>
            <span className={style.value}>{user.address.suite}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>City:</span>
            <span className={style.value}>{user.address.city}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Zipcode:</span>
            <span className={style.value}>{user.address.zipcode}</span>
          </div>

          <h2 className={style.head}>Company</h2>
          <div className={style.userInfo}>
            <span className={style.label}>Name:</span>
            <span className={style.value}>{user.company.name}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>CatchPhrase:</span>
            <span className={style.value}>{user.company.catchPhrase}</span>
          </div>

          <div className={style.userInfo}>
            <span className={style.label}>Bs:</span>
            <span className={style.value}>{user.company.bs}</span>
          </div>
          <div className={style.articleButton}>
          <Button onClick={():void => setUser(user)} href={`/articles/${user.id}`}>Read Articles</Button>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
export default UserListClient;
