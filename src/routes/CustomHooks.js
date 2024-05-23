import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import useInternetStates from "../useInternetStatus";

export function CustomHooks() {
  
  const isOnline = useInternetStates();


  return (
   <div>{isOnline ? "Connected to Internet" : "your are offline"}</div>
  );
}

export default CustomHooks;
