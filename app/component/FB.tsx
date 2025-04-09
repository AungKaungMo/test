"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const FB = () => {
  return (
  <FacebookProvider appId="1313635213027504" chatSupport>
    <CustomChat pageId="1313635213027504" minimized={true}/>
  </FacebookProvider>   
  )
}

export default FB