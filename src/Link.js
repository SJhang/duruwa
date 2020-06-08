import React from 'react';
import { useRouter } from 'next/router'
import { Link } from '@material-ui/core';

function ActiveLink({ children, href, className, color }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    return router.push(href);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      color={color || router.pathname === href ? 'inherit' : 'primary'}
      className={className}
    >
      {children}
    </Link>
  )
}

export default ActiveLink