import { useEffect, useState } from 'react';

import { protectedResources } from '../authConfig';
import useGraphWithMsal from '../hooks/useGraphWithMsal';
import { SharePointListData } from '../components/SharePointListData';


export const SharePointList = () => {
    const [graphData, setGraphData] = useState(null);
    console.log("protectedResources:2",protectedResources)
    const { error, result, execute } = useGraphWithMsal({
        scopes: protectedResources.sharepointLists?.scopes,
    }, protectedResources.sharepointLists?.endpoint);

    useEffect(() => {
        if (!!graphData) {
            return;
        }

        if (!graphData) {
            execute(protectedResources.sharepointLists.endpoint).then((data) => {
                setGraphData(data);
            });
        }
    }, [graphData, execute, result]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return <>{graphData ? <SharePointListData response={result} graphData={graphData} /> : null}</>;
};