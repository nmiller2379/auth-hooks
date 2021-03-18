import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '316356783084-uc6cu69ell0aa9t4a0l3omfhjnmoaiir.apps.googleusercontent.com';

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out successfully.');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
        <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;