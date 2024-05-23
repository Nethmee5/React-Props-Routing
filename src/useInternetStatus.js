import React, { useEffect, useState } from "react";

export function useInternetStates() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    //handle offline and online events
    function setOnline() {
      setIsOnline(true);
    }
    function setOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online',setOnline);
    window.addEventListener('offline',setOffline)
    //cleanup function
    return () => {
      window.removeEventListener('online',setOnline);
      window.removeEventListener('offline',setOffline);

    };
  },[]);
  return isOnline;
  
}

export default useInternetStates;
