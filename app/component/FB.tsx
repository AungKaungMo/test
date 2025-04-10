// "use client"
// import { FacebookProvider, CustomChat } from 'react-facebook';

// const FB = () => {
//   return (
//   <FacebookProvider appId="1313635213027504" chatSupport>
//     <CustomChat pageId="530863376787158" minimized={true}/>
//   </FacebookProvider>   
//   )
// }

// export default FB
import { MessengerChat } from "react-messenger-chat-plugin";

const FB = () => {
  return (
    <MessengerChat pageId='530863376787158' />
  )
}

export default FB