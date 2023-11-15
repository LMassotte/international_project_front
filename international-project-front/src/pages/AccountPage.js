import React from 'react'
import UserInformations from '../components/UserInformations'
import WhiteBoard from '../components/WhiteBoard'

export default function AccountPage() {
  return (
    <div>
      <WhiteBoard width={'900px'} height={'500px'}>
        <UserInformations />
      </WhiteBoard>
    </div>
  )
}
