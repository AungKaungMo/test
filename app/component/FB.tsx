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

const FB = () => {
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
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
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
    <div 
      className="fb-page" 
      data-href="https://www.facebook.com/yourpagename" 
      data-tabs="messages"
      data-width="350" 
      data-height="500" 
      data-small-header="true"
    ></div>
  );
}

export default FB;