
import React from 'react'
import ProtectedAdmin from '../components/admin/ProtectedAdmin'
import Logout from './Logout'

const Page = () => {
  return (
    <ProtectedAdmin>
        <div className=''>
            <Logout />
        </div>
    </ProtectedAdmin>
  )
}

export default Page

