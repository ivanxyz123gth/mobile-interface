import React, { useRef, useEffect } from "react";
import { setAppNumber } from "../../../slices";
import { useDispatch } from 'react-redux';
import { loop } from "./snake";

export const Snake: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  dispatch(setAppNumber(1));

  useEffect(() => {
    const canvas:HTMLCanvasElement | null = canvasRef.current;

    if (canvas === null) return;

    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context === null) return;

    let gameLoop = setInterval(() => loop(context), 400);

    return () => {
      clearInterval(gameLoop);
    };
  }, []); 

  return <canvas ref={canvasRef} width="300" height="300"/>;
};
