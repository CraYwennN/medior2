//component gets the username from context and displays the Articles
'use client';
import { ReactElement } from 'react';
import { useGlobalContext } from '@/app/Context/globalContext';
import { ArticlesType } from '../Types/Types';
import style from './Articlelist.module.css';

const ShowArticles = ({ Articles }:ArticlesType):ReactElement => {
  const { Tuser } = useGlobalContext();
  return (
    <div className={style.body}>
    <div className={style.header}>
      <h1 className={style.headerH}>Articles</h1>
      <span className={style.headertext}>Author:</span>
      <span className={style.headertext}>{Tuser.name}</span>
    </div>
  <div className={style.list}>
    {Articles.map((Article) => (
      <div className={style.article} key={Article.id}>
        <h2 className={style.articleheader}>{Article.title}</h2>
        <p className={style.articlebody}>{Article.body}</p>
        </div>
    ))}
  </div>
  </div>
  );
};
export default ShowArticles;
