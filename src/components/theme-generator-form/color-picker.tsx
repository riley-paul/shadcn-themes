import React from "react";

interface Props {
  title: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorPicker({ value, onChange }: Props) {
  return (
    <label
      className="block size-9 cursor-pointer overflow-hidden rounded-full border md:size-12"
      style={{ backgroundColor: value }}
    >
      <input
        type="color"
        className="cursor-pointer opacity-0"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </label>
  );
}
