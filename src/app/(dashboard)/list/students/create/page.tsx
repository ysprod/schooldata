import StudentForm from '@/components/forms/StudentForm'
import React from 'react'
const Page = () => {
  return (
    <div className="flex-1 p-10 flex flex-col gap-4 xl:flex-row">
      <StudentForm type='create' />
    </div>

  )
}

export default Page