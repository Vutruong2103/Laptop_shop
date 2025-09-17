import React, { Children, ReactNode } from 'react'
import Login from '../../pages/login'
import Register from '../../pages/register'

type Props = { children: ReactNode };

const AuthLayout = ({children}: Props) => {

  return (
    <div >
        {children}
    </div>
  )
}

export default AuthLayout;