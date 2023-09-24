import { useEffect, useState } from 'react';
import { protectedResources } from '../authConfig';
import useGraphWithMsal from '../hooks/useGraphWithMsal';
import { SharePointListData } from '../components/SharePointListData';

export const SharepointLists = () => {
    const [sharepointListData, setSharepointListData] = useState(null);
    const { error, result, execute } = useGraphWithMsal({
        scopes: protectedResources.sharepointLists?.scopes,
    }, protectedResources.sharepointLists?.endpoint);

    

    useEffect(() => {
        execute(protectedResources.sharepointLists.endpoint).then((data) => {
            setSharepointListData(data);
        });
    }, [protectedResources.sharepointLists.endpoint, execute]);

    if (error) {
        console.log('Error fetching Sharepoint data:', error.message);  // Log error
        return <div>Error: {error.message}</div>;
    }

    return <>{
        sharepointListData ?
            <SharePointListData response={result} data={sharepointListData} />
            :
            null}
    </>;
};