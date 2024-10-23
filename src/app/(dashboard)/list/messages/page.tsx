import { MessagemenuItems } from '@/components/Menu'
import { MonMenu } from '@/components/monmenu'
import React from 'react'

const Page = () => {
  return (
    <MonMenu menuItems={MessagemenuItems}></MonMenu>
  )
}

export default Page