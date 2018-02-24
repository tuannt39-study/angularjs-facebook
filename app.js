window.fbAsyncInit = function() {
    FB.init({
      appId: '2090452601241415',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.12'
    });

    FB.getLoginStatus(function (response) {
      console.log(response);
      if (!response || response.error) {
          // not connected
      } else {
          // connected
      }
    });
};
