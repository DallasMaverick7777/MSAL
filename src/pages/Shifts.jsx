import React, { useEffect, useState } from 'react';
import { ShiftsData } from '../components/DataDisplay';
import { protectedResources } from '../authConfig';
import useGraphWithMsal from '../hooks/useGraphWithMsal';

export const Shifts = () => {
  const [shiftsData, setShiftsData] = useState(null);

  const { error, result, execute } = useGraphWithMsal({
    scopes: protectedResources.graphShifts.scopes,
  }, protectedResources.graphShifts.endpoint);

  useEffect(() => {
    if (!!shiftsData) {
      return;
    }

    execute(protectedResources.graphShifts.endpoint).then((data) => {
      setShiftsData(data);
    });
  }, [shiftsData]);

  if (error) {
    console.log('Error fetching shifts data:', error.message);  // Log error
    return <div>Error: {error.message}</div>;
  }

  return <>{shiftsData ? <ShiftsData response={result} shiftsData={shiftsData} /> : null}</>;
};
