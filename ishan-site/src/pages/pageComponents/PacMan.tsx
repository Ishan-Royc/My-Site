import p5 from 'p5';
import { useEffect, useRef } from 'react';

function PacMan() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return <div ref={canvasRef}></div>;
}

export default PacMan;