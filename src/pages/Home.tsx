import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';


import Spline from "@splinetool/react-spline";

function Intro() {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div>
      {isMobile ? <Spline scene="https://prod.spline.design/ZROb8UaUTFFxmd2t/scene.splinecode" /> : <Spline scene="https://prod.spline.design/fU2f1Myk8B97Wt7h/scene.splinecode" />}
    </div>
  );
}


function Cubic() {
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div>
      {isMobile ? (<>
        <Spline 
        //style={{ height: "600px" }}
          scene="https://prod.spline.design/U0UYw6wAal2rJbHq/scene.splinecode" />
        <div style={{ height: "160px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <Button
            variant="gradient"
            gradient={{
              from: "rgba(213, 106, 252, 1)",
              to: "rgba(255, 255, 255, 1)",
              deg: 219,
            }}
            component={Link}
            to="/waitlist"
            style={{ height: '70px', width: '300px', borderRadius: '999px', fontSize: '24px'}}
          >
            Join the waitlist
          </Button>
        </div>
      </>
    ) : (<>
        <Spline 
        //style={{ height: "600px" }}
          scene="https://prod.spline.design/AlpxgttatjkQI-K9/scene.splinecode" />
        <div style={{ height: "160px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <Button
            variant="gradient"
            gradient={{
              from: "rgba(213, 106, 252, 1)",
              to: "rgba(255, 255, 255, 1)",
              deg: 219,
            }}
            component={Link}
            to="/waitlist"
            style={{ height: '70px', width: '300px', borderRadius: '999px', fontSize: '24px'}}
          >
            Join the waitlist
          </Button>
        </div>
      </>
    )
}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* <Spline scene="https://prod.spline.design/fU2f1Myk8B97Wt7h/scene.splinecode" /> */}
      {Intro()}
      {Cubic()}
      {/* <Spline style={{ height: "600px" }}
      scene="https://prod.spline.design/AlpxgttatjkQI-K9/scene.splinecode" />
      <div style={{ height: "160px", display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Button
          variant="gradient"
          gradient={{
            from: "rgba(213, 106, 252, 1)",
            to: "rgba(255, 255, 255, 1)",
            deg: 219,
          }}
          component={Link}
          to="/waitlist"
          style={{ height: '70px', width: '300px', borderRadius: '999px', fontSize: '24px'}}
        >
          Join the waitlist
        </Button>
      </div> */}
    </div>
  );
}

// <Spline scene="https://prod.spline.design/9MR1xyQCeJECSg5p/scene.splinecode" />
