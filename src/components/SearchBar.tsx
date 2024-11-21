import { Search } from 'lucide-react';
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-container">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search books..."
        className="search-input"
      />
    </div>
  );
}