import React from 'react';
import { useRouter } from 'next/router'
import { Link } from '@material-ui/core';

function ActiveLink(props) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    return router.push(props.href);
  }

  return (
    <Link
      {...props}
      onClick={handleClick}
      color={props.color || router.pathname === props.href ? 'inherit' : 'primary'}
    >
      {props.children}
    </Link>
  )
}

export default ActiveLink