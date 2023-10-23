//Root Layout with GlobalContext
import { ReactElement } from 'react';
import { Metadata } from 'next';
import { GlobalContextProvider } from './Context/globalContext';
import '@/styles/index.scss';

interface IProps {
  children: ReactElement
}

export const metadata: Metadata = {
  title: 'Medior Page',
  icons: {
    icon: '/favicons/favicon.svg',
  },
};

const RootLayout = ({
  children,
}: IProps): ReactElement => (
  <html lang="en">
    <body className="page-layout">
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </body>
  </html>
);

export default RootLayout;
