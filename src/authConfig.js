/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: '5b7b3cf8-2b5e-49df-8f33-e62f2a17eeba', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://login.microsoftonline.com/01c6c7ba-3525-4f90-ae9a-4dc8f5f82790', // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        clientCapabilities: ['CP1'], // this lets the resource owner know that this client is capable of handling claims challenge.
    },
    cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        /**
         * Below you can configure MSAL.js logs. For more information, visit:
         * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
         */
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ['User.Read', 'Contacts.Read'],
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    graphMe: {
        endpoint: 'https://graph.microsoft.com/v1.0/me',
        scopes: ['User.Read'],
    },
    graphContacts: {
        endpoint: 'https://graph.microsoft.com/v1.0/me/contacts',
        scopes: ['Contacts.Read'],
    },
    graphShifts: {
        scopes: ['User.Read', 'Schedule.Read.All'], // Adjust scopes as needed
        endpoint: 'https://graph.microsoft.com/v1.0/teams/e143d3f7-a374-4086-b216-3c0ca42a243b/schedule/shifts', // Adjust endpoint as needed
    },
    sharepointLists: {
        scopes: ['Sites.Read.All', 'Sites.ReadWrite.All'], // Adjust scopes as needed
        endpoint: 'https://graph.microsoft.com/v1.0/sites/94bcd49c-d182-4072-9f8a-cc3b9b999d8a/lists/f69dea45-003b-4ba8-8332-3c235cc55697/items', // Adjust endpoint as needed
    },
};

