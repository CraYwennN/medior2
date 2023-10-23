//displays Articles on the page
import { ReactElement } from 'react';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ArticleList from '@/components/Articles/ArticleList';

const Page = ({ params }:Params):ReactElement  => {
  const userId = params.userId;
  return (
    <ArticleList userId={userId}/>
  );
};
export default Page;

