import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function WaitList() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/GFAU3fGESbgO-jqZ/scene.splinecode" />
      </Suspense>
    </div>
  );
}
