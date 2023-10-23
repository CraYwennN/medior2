//displays Articles on the page
import { ReactElement } from 'react';
import ArticleList from '@/components/Articles/ArticleList';

interface IPageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }:IPageProps):ReactElement  => {
  const userId = params.userId;
  return (
    <ArticleList userId={userId}/>
  );
};
export default Page;

