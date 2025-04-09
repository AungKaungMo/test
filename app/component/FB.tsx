// "use client"
// import { FacebookProvider, MessengerChat } from 'react-facebook';

// const FB = () => {
//   return (
//   <FacebookProvider appId="1313635213027504" chatSupport>
//     {/* <CustomChat pageId="530863376787158" minimized={true}/> */}
//       <MessengerChat
//         pageId="248353336747653"
//         language="en_US"
//         themeColor="#0084ff"
//         bottomSpacing={50}
//         loggedInGreeting="Hi! How can we help you?"
//         loggedOutGreeting="Hi! Please log in to chat with us."
//       />

//   </FacebookProvider>   
//   )
// }

// export default FB

"use client";

import { useEffect } from "react";
declare global {
  interface Window {
    fbAsyncInit: Function;
    FB: any;
  }
}

export default function MessengerChat() {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1313635213027504",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v17.0",
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Facebook root div */}
      <div id="fb-root"></div>

      {/* Messenger chat plugin */}
      <div
        className="fb-customerchat"
        data-page_id="530863376787158"
        data-theme_color="#0084ff"
        data-logged_in_greeting="Hi! How can we help you?"
        data-logged_out_greeting="Hi! Please log in to chat with us."
      ></div>
    </>
  );
}
