import React from 'react';

type NotloggedLayoutProps = {
  children: React.ReactNode;
};

const NotloggedLayout: React.FC<NotloggedLayoutProps> = ({
  children,
}: NotloggedLayoutProps): React.ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default NotloggedLayout;
