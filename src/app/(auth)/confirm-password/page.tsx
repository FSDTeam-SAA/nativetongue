import React, { Suspense } from 'react'
import CreateNewPassword from './_components/confirmpassword'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateNewPassword />
    </Suspense>
  )
}

export default page