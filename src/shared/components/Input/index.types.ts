export interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  setParams: (value: string) => void;
  className?: string;
}
