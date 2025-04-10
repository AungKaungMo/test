"use client"
// import { FacebookProvider, CustomChat } from 'react-facebook';

// const FB = () => {
//   return (
//   <FacebookProvider appId="1313635213027504" chatSupport>
//     <CustomChat pageId="530863376787158" minimized={true}/>
//   </FacebookProvider>   
//   )
// }

// export default FB

import { useEffect } from 'react';

const FacebookChat: React.FC = () => {
  useEffect(() => {
    const chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute('page_id', '530863376787158'); // Replace with your actual page ID
      chatbox.setAttribute('attribution', 'biz_inbox');
    }

    // Facebook SDK initialization
    (window as any).fbAsyncInit = function () {
      (window as any).FB.init({
        xfbml: true,
        version: '1', // Replace with your actual API version, e.g., 'v18.0'
      });
    };

    // Load the Facebook SDK script if not already loaded
    const scriptId = 'facebook-jssdk';
    if (!document.getElementById(scriptId)) {
      const js = document.createElement('script');
      js.id = scriptId;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      document.body.appendChild(js);
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};

export default FacebookChat;
