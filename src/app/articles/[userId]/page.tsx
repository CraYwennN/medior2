//displays Articles on the page
import { ReactElement } from 'react';
// pakliže by komponenta articles byla zapsána do souboru /components/index.ts,
// tak by stačilo: import { ArticleList } from '@/components';
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

// const Page = ({ params: { userId } }: IPageProps): ReactElement => (
//   <ArticleList userId={userId} />
// );

export default Page;
