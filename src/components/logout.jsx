import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function Logout() {

  const history = useHistory();
  useEffect(() => {
    if (sessionStorage.getItem('userdata')) {
      sessionStorage.clear();
      localStorage.clear();
    }

    history.push('/login');
    window.location.reload();
  })
  return (
    <>

    </>
  )
}
