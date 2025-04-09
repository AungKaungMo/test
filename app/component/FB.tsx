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

"use client"
import { useEffect } from 'react';

const FB = () => {
  return (
    <iframe
      src={`https://www.facebook.com/v18.0/plugins/customerchat.php?page_id=530863376787158&minimized=true`}
      width="350"
      height="500"
      style={{border: 'none', overflow: 'hidden'}}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen={true}
    />
  );
}

export default FB;