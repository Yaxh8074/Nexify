'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    FB: any;
  }
}

export default function FacebookLogin() {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '8460951030687610',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
      });
    };
  }, []);

  const handleLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome! Fetching your information....');
        window.FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  return (
    <Button onClick={handleLogin}>Login with Facebook</Button>
  )
}