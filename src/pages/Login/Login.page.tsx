import React from 'react';
import { Box } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import env from '../../enviroment';
import MainLayout from '../../layouts/Main/Main.layout';
import NotloggedLayout from '../../layouts/NotLogged/NotLogged.layout';
import useGlobalStyles from '../../themes/glogal.styles';
import LoginForm from './LoginForm/LoginForm';
import useStyles from './styles';

type LoginPageProps = {
  token?: string;
};

const LoginPage: React.FC<LoginPageProps> = ({
  token,
}: LoginPageProps): React.ReactElement => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  const handleSuccessGoogleLogout = () => {
    console.log('Saiu com sucesso');
  };
  const LoggedContent = (
    <MainLayout>
      <h1>Logado</h1>
      <GoogleLogout
        clientId={env.googleClientId}
        buttonText="Sair"
        onLogoutSuccess={handleSuccessGoogleLogout}
      />
    </MainLayout>
  );

  const NotLoggedContent = (
    <NotloggedLayout>
      <Box
        className={`${globalClasses.centered} ${classes.peopleBackground} 
        ${globalClasses.flexRow}`}
      >
        <LoginForm />
      </Box>
    </NotloggedLayout>
  );

  return token ? LoggedContent : NotLoggedContent;
};

LoginPage.defaultProps = {
  token: '',
};

export default LoginPage;
