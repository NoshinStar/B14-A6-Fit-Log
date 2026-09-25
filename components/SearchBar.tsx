"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name or tag...",
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full max-w-md bg-gray-900 text-white text-sm px-4 py-2.5 rounded-full border border-gray-700 focus:outline-none focus:border-[#ccff00]"
    />
  );
}