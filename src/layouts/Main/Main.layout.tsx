import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps): React.ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 40,
      }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
