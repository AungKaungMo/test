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

// Declare FB types globally
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: {
        xfbml: boolean;
        version: string;
      }) => void;
    };
  }
}

const FBChat = () => {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Load Facebook SDK script
    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      js.async = true;
      js.defer = true;
      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));

    return () => {
      // Cleanup if needed
      // delete window.fbAsyncInit;
      // delete window.FB;
    };
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div 
        className="fb-customerchat"
        data-attribution="setup_tool"
        data-page-id="530863376787158"
        data-theme-color="#0084ff"
        data-logged-in-greeting="Hi! How can we help you?"
        data-logged-out-greeting="Hi! How can we help you?"
        data-minimized="true"
      ></div>
    </>
  );
}

export default FBChat;