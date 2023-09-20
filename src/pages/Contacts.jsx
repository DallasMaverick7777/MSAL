import { useEffect, useState } from 'react';

import { ContactsData } from '../components/DataDisplay';
import { protectedResources } from '../authConfig';
import useGraphWithMsal from '../hooks/useGraphWithMsal';

export const Contacts = () => {
    const [graphData, setGraphData] = useState(null);
    console.log("protectedResources:1",protectedResources)
    const { error, result, execute } = useGraphWithMsal({
        scopes: protectedResources.graphContacts.scopes,
    }, protectedResources.graphContacts.endpoint);

    useEffect(() => {
        if (!!graphData) {
            return;
        }

        if (!graphData) {
            execute(protectedResources.graphContacts.endpoint).then((data) => {
                setGraphData(data);
            });
        }
    }, [graphData, execute, result]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{graphData ? <ContactsData response={result} graphContacts={graphData} /> : null}</>;
};
