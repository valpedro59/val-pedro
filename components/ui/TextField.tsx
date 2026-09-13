"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";

type BaseProps = {
  label: string;
  error?: string;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { multiline?: false };
type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true };

export default function TextField(props: InputProps | TextareaProps) {
  const [touched, setTouched] = useState(false);
  const { label, error, multiline, ...rest } = props as any;
  const showError = touched && error;

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </span>
      {multiline ? (
        <textarea
          className={`field min-h-[120px] resize-none ${
            showError ? "field-error" : ""
          }`}
          onBlur={() => setTouched(true)}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={`field ${showError ? "field-error" : ""}`}
          onBlur={() => setTouched(true)}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {showError && (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      )}
    </label>
  );
}
