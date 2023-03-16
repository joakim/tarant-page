import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

const privatePages = [""]

// Default implementation, that you can customize
export default function Root({children}) {
    return <Auth0Provider
    domain="dev-u6zl0gyyil0lqmcm.eu.auth0.com"
    clientId="xuMWdth6SsAXj7KYkJWZufVFUEfIE6Fh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {children}
    </Auth0Provider>
}