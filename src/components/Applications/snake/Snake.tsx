import React, { useRef, useEffect } from "react";
import { loop } from "./snakeGame";

export const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas:HTMLCanvasElement | null = canvasRef.current;

    if (canvas === null) return;

    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context === null) return;

    let gameLoop = setInterval(() => loop(context), 400);

    return () => {
      clearInterval(gameLoop);
    };
  }, [1,3,4,5]); 

  return <canvas ref={canvasRef} width="300" height="300"/>;
};
