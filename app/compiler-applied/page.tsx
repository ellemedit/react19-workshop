"use client";

import React, { useDeferredValue, useState } from "react";

export default function CustomFormElements() {
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const deferredSliderValue = useDeferredValue(sliderValue);
  const isPending = sliderValue !== deferredSliderValue;

  const handleCheckboxChange = () => setIsChecked(!isChecked);
  const handleRadioChange = (value: string) => setRadioValue(value);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTextValue(e.target.value);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSliderValue(Number(e.target.value));

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-6">
              Custom Form Elements
            </div>

            <p>isPending: {isPending ? "true" : "false"}</p>

            {Array(deferredSliderValue)
              .fill(null)
              .map((_, index) => (
                <ArtificalDelay key={index} />
              ))}

            {/* Checkbox */}
            <div className="mb-6">
              <Checkbox
                label="Custom Checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>

            {/* Radio Buttons */}
            <div className="mb-6">
              <div className="text-gray-700 font-medium mb-2">
                Custom Radio Buttons
              </div>
              {["Option 1", "Option 2", "Option 3"].map((option) => (
                <RadioButton
                  key={option}
                  label={option}
                  value={option}
                  checked={radioValue === option}
                  onChange={handleRadioChange}
                />
              ))}
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <TextInput
                label="Custom Text Input"
                value={textValue}
                onChange={handleTextChange}
              />
            </div>

            {/* Slider */}
            <div className="mb-6">
              <Slider
                label="Custom Slider"
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>

            {/* Form Values Display */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Form Values:</h3>
              <p>Checkbox: {isChecked ? "Checked" : "Unchecked"}</p>
              <p>Radio: {radioValue || "None selected"}</p>
              <p>Text Input: {textValue || "Empty"}</p>
              <p>Slider: {sliderValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArtificalDelay = function ArtificalDelay() {
  const now = performance.now();
  while (performance.now() - now < 5) {
    // Artifical delay
  }
  return null;
};

// Checkbox component
const Checkbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  console.log("rendered");
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`w-6 h-6 bg-white border-2 rounded-md border-gray-400 ${checked ? "bg-indigo-500 border-indigo-500" : ""}`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white fill-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-gray-700 font-medium">{label}</span>
    </label>
  );
};

// Radio button component
const RadioButton = ({
  label,
  value,
  checked,
  onChange,
}: {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}) => (
  <label className="flex items-center space-x-3 cursor-pointer mt-2">
    <div className="relative">
      <input
        type="radio"
        className="sr-only"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <div
        className={`w-6 h-6 bg-white border-2 rounded-full border-gray-400 ${checked ? "border-indigo-500" : ""}`}
      >
        {checked && (
          <div className="w-3 h-3 bg-indigo-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        )}
      </div>
    </div>
    <span className="text-gray-700">{label}</span>
  </label>
);

// Text input component
const TextInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label
      htmlFor="custom-input"
      className="block text-gray-700 font-medium mb-2"
    >
      {label}
    </label>
    <input
      type="text"
      id="custom-input"
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
      value={value}
      onChange={onChange}
      placeholder="Type something..."
    />
  </div>
);

// Slider component
const Slider = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label
      htmlFor="custom-slider"
      className="block text-gray-700 font-medium mb-2"
    >
      {label}: {value}
    </label>
    <input
      type="range"
      id="custom-slider"
      min="0"
      max="100"
      value={value}
      onChange={onChange}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
  </div>
);
