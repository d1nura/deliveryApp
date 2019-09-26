import React from "react";
import PublicDisplay from "./PublicDisplay";

function Vegetables() {
  return <PublicDisplay url="veg" />;
}

export default React.memo(Vegetables);
