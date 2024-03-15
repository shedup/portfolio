import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Sketch = () => {
  const canvasRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    if (sketchRef.current) {
      sketchRef.current.remove();
    }
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(
          canvasRef.current
        );
      };

      p.draw = () => {
        // Your p5.js drawing code here
        let count = 190;
        let time = 0;
        let spacing = 10;
        let noiseScale = 0.5;
        for (let i = 0; i < count; i++) {
          // let x = i * (size + space) + size / 2 * noise(noiseScale * i);
          for (let j = 0; j < count; j++) {
            let x = i * spacing;
            let y = j * spacing;
            let rand = Math.floor(Math.random() * 5);
            let r2 = Math.floor(Math.random() * 5);
            let distance = p.dist(x, y, p.width / 1, p.height / 2); // Calculate distance from center
            let ripple =
              p.sin(distance * 0.1 - time) + p.cos(distance * 0.1 + time); // Use sine and cosine to create ripples
            let radius = p.map(ripple, -2, 2, 2, 8); // Map ripple to radius
            p.fill(254);
            p.noStroke();
            p.ellipse(x, y, radius);
          }
        }

        time += 0; // Increment time for animation
      };
    };

    sketchRef.current = new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
