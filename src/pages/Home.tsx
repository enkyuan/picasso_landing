import React from "react";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/wJcnzi3CIJmsr0go/scene.splinecode" />
      <Spline
        style={{ width: 400, height: 400 }}
        scene="https://prod.spline.design/ZzCNJl-5GzU8-DXv/scene.splinecode"
      />
      <Spline scene="https://prod.spline.design/EV39zPMo5WvUdtFF/scene.splinecode" />
      <Spline scene="https://prod.spline.design/W6Jj6gD2Qx9AAqlK/scene.splinecode" />
      <Spline scene="https://prod.spline.design/p7nl1-ji-pgSLLZj/scene.splinecode" />
    </div>
  );
}
