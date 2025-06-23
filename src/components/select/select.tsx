import { useState, useRef, useEffect, type FC, type ReactNode } from "react";
import Button from "../button";

type Option<T> = {
  label: string;
  value: T;
};

type SelectProps<T> = {
  options: Array<Option<T>>;
  value?: T;
  onChange?: (value: T) => void;
  placeholder?: string;
  className?: string;
};

const Select: FC<SelectProps<T>> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<ReactNode | undefined>(
    value
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedValue = value !== undefined ? value : internalValue;

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label ?? placeholder;

  const handleSelect = (val: ReactNode) => {
    setInternalValue(val);
    onChange?.(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative w-full min-w-fit ${className}`}
      ref={dropdownRef}
    >
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedLabel}
      </Button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-md">
          {options.map((opt) => (
            <li
              key={String(opt.value)}
              onClick={() => handleSelect(opt.value)}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                opt.value === selectedValue ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
