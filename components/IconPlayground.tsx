"use client";

import { useState } from "react";
import {
  DuitNowSquareV1,
  DuitNowSquareV2,
  DuitNowSquareV3,
  DuitNowSquareV4,
  TngSquare,
  TngCirle,
} from "@raufsemi/myicons";

type Props = {
  icon: string;
};

const sizes = [16, 20, 24, 32, 48, 64, 96, 120];

const backgrounds = ["#ffffff", "#f5f5f5", "#000000", "#fef3c7"];

const iconMap = {
  "duitnow-square-v1": DuitNowSquareV1,
  "duitnow-square-v2": DuitNowSquareV2,
  "duitnow-square-v3": DuitNowSquareV3,
  "duitnow-square-v4": DuitNowSquareV4,
  "tng-square": TngSquare,
  "tng-circle": TngCirle,
} as const;

const iconNames = {
  "duitnow-square-v1": "DuitNowSquareV1",
  "duitnow-square-v2": "DuitNowSquareV2",
  "duitnow-square-v3": "DuitNowSquareV3",
  "duitnow-square-v4": "DuitNowSquareV4",
  "tng-square": "TngSquare",
  "tng-circle": "TngCirle",
} as const;

export function IconPlayground({ icon }: Props) {
  const [size, setSize] = useState(120);
  const [background, setBackground] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  const Icon = iconMap[icon as keyof typeof iconMap];
  const iconName = iconNames[icon as keyof typeof iconNames];

  if (!Icon) {
    return null;
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(`<${iconName} size={${size}} />`);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div>
      {/* Preview */}
      <div
        className="flex min-h-100 items-center justify-center rounded-2xl border border-neutral-200"
        style={{ backgroundColor: background }}
      >
        <Icon size={size} />
      </div>

      {/* Controls */}
      <div className="mt-8 space-y-6">
        {/* Size */}
        <div>
          <p className="mb-3 text-sm font-medium">Size</p>

          <div className="flex flex-wrap gap-2">
            {sizes.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSize(value)}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  size === value
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white hover:bg-neutral-50"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Background */}
        <div>
          <p className="mb-3 text-sm font-medium">Background</p>

          <div className="flex flex-wrap gap-2">
            {backgrounds.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setBackground(color)}
                aria-label={`Set background to ${color}`}
                className={`h-9 w-9 rounded-full border transition-transform hover:scale-105 ${
                  background === color
                    ? "border-black ring-2 ring-black ring-offset-2"
                    : "border-neutral-200"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Copy */}
        <div>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Copy
          </button>
        </div>

        {/* Toast */}
        <div
          className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-lg transition-all duration-200 ${
            copied ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Copied to clipboard
        </div>
      </div>
    </div>
  );
}
