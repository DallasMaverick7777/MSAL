import { useEffect, useState } from 'react';
import { protectedResources } from '../authConfig';
import useGraphWithMsal from '../hooks/useGraphWithMsal';
import { SharePointListData } from '../components/SharePointListData';

export const SharePointList = () => {
    const [sharepointListData, setSharepointListData] = useState(null);
    console.log("protectedResources:2",protectedResources)
    const { error, result, execute } = useGraphWithMsal({
        scopes: protectedResources.sharepointLists?.scopes,
    }, protectedResources.sharepointLists?.endpoint);

    useEffect(() => {
        if (!!sharepointListData) {
            return;
        }

        execute(protectedResources.sharepointLists.endpoint).then((data) => {
            setSharepointListData(data);
          });
        }, [sharepointListData]);
      
        if (error) {
          console.log('Error fetching Sharepoint data:', error.message);  // Log error
          return <div>Error: {error.message}</div>;
        }

    return <>{sharepointListData ? <SharePointListData response={result} sharepointListData={sharepointListData} /> : null}</>;
};