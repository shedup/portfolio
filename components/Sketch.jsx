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
        let size = 5;
        let spacing = 10;
        let noiseScale = 0.5;
        for (let i = 0; i < count; i++) {
          // let x = i * (size + space) + size / 2 * noise(noiseScale * i);
          for (let j = 0; j < count; j++) {
            let x = i * spacing;
            let y = j * spacing;
            let noiseValue = p.noise(i * noiseScale, j * noiseScale);
            let radius = p.map(noiseValue, 0, 1, 2, 8); // Map noise value to dot radius

            p.fill(255);
            p.noStroke();
            p.ellipse(x, y, radius);
          }
        }
      };
    };

    sketchRef.current = new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;
