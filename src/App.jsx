import { Routes, Route } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';

import { PageLayout } from './components/PageLayout';
import { Profile } from './pages/Profile';
import { Contacts } from './pages/Contacts';
import { SharepointLists } from './pages/SharepointLists';
import { Home } from './pages/Home';

import './styles/App.css';
import { Shifts } from './pages/Shifts';


const Pages = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/SharepointLists" element={<SharepointLists />} />
            
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

/**
 * msal-react is built on the React context API and all parts of your app that require authentication must be
 * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
 * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
 * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
 */
const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
                <Pages />
            </PageLayout>
        </MsalProvider>
    );
};

export default App;