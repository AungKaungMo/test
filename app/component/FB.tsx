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

"use client";

import { useRef, useEffect } from "react";
declare global {
  interface Window {
    fbAsyncInit: Function;
    FB: any;
  }
}

const ChatBot: React.FC = () => {
  const MessengerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (MessengerRef.current) {
      // Set page_id and attribution as attributes on the MessengerRef
      MessengerRef.current.setAttribute("page_id", "530863376787158");
      MessengerRef.current.setAttribute("attribution", "biz_inbox");

      // Initialize the Facebook SDK
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v16.0",
        });
      };

      // Load Facebook SDK script dynamically
      (function (d, s, id) {
        var js: any,
          fjs : any = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      {/* Messenger chat plugin */}
      <div
        ref={MessengerRef}
        id="fb-customer-chat"
        className="fb-customerchat"
      ></div>
    </>
  );
};

export default ChatBot;
