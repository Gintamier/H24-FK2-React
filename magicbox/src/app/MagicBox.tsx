"use client";
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

// Pre-defined colors to be used for randomizer
const tailwindColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

// Issue with running the sizes, If you don't manually run the sizes first then it won't work... why??? - Oli
const sizes = [20, 24, 28, 32];
let currentIndex = 0;

// TODO: According to this type, add these functions to this component to be used within the parent component.
// Hint: useImperativeHandle
type MagicBoxHandle = {
  changeColor: () => void;
  resize?: () => void;
  wiggle?: () => void;
};

type MagicBoxRef = MagicBoxHandle & HTMLDivElement;

// eslint-disable-next-line react/display-name
const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  function nextSize() {
    setSize(sizes[currentIndex]);
    currentIndex = (currentIndex + 1) % sizes.length;
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        changeColor: randomColor,
        wiggle,
        resize: nextSize,
      };
    },
    []
  );

  const [currentColor, setCurrentColor] = useState(tailwindColors[0]);

  const boxRef = useRef<MagicBoxRef>(null);
  // TODO: Can use either state or ref to maintain this value
  const [size, setSize] = useState(20);

  // Random color generator
  function randomColor() {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    setCurrentColor(tailwindColors[randomIndex]);
  }

  const wiggle = () => {
    // TODO: Add and then remove an animation from the classlist of a component
    boxRef.current?.classList.add("animate-wiggle");
    setTimeout(() => boxRef.current?.classList.remove("animate-wiggle"), 2000);
  };

  return (
    <div
      ref={boxRef}
      className={
        /*TODO: Update the styles to work for more variables*/ `w-${size} h-20 ${currentColor}`
      }
    />
  );
});

// Parent Component
function MagicBoxParent() {
  const magicBoxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="App">
      <h1>Magic Box!</h1>
      <button
        onClick={() => magicBoxRef.current?.changeColor()}
        className="m-4 border"
      >
        Change Color
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.resize?.()}
      >
        Resize
      </button>
      <button
        className="m-4 border"
        onClick={() => magicBoxRef.current?.wiggle?.()}
      >
        Wiggle
      </button>
      <MagicBox ref={magicBoxRef} />
    </div>
  );
}

export default MagicBoxParent;
