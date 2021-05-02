import React from 'react';
import {
  Box,
  Button,
  Divider,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { LockOpenRounded } from '@material-ui/icons';
import GoogleLogin from 'react-google-login';
import env from '../../../enviroment';

type Props = {
  onClick?: () => void;
};

const LoginForm: React.FC<Props> = ({ onClick }: Props) => {
  const handleSuccessGoogleLogin = (res: unknown) => {
    console.warn('[Sucess]', res);
  };

  const handleFailureGoogleLogin = (res: unknown) => {
    console.warn('[Failure]', res);
  };

  console.log('id google', env.googleClientId);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 350,
        padding: 36,
        borderRadius: 8,
        backgroundColor: '#ffffffbb',
        boxShadow: '0px 4px 4px 2px  rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h4">Entrar</Typography>
      <TextField
        required
        label="E-mail"
        variant="outlined"
        style={{ margin: 10 }}
      />
      <TextField
        required
        label="Senha"
        type="password"
        variant="outlined"
        style={{ margin: 10 }}
      />
      <Button
        startIcon={<LockOpenRounded />}
        variant="contained"
        onClick={onClick}
      >
        Entrar
      </Button>
      <Box style={{ marginTop: 10, marginBottom: 10 }}>
        <Typography component="p">
          <Link href="/esqueceu-senha">Esqueceu a senha? Clique aqui</Link>
        </Typography>
      </Box>
      <Divider />
      <GoogleLogin
        clientId={env.googleClientId}
        buttonText="Entrar com Google"
        onSuccess={handleSuccessGoogleLogin}
        onFailure={handleFailureGoogleLogin}
        cookiePolicy="single_host_origin"
        style={{ marginTop: 20 }}
        isSignedIn
      />
    </Box>
  );
};
LoginForm.defaultProps = {
  onClick: () => {},
};

export default LoginForm;
