import clsx from "clsx";

interface Props {
  className?: string;
  value?: string;
  placeholder?: string;
}

export default function GradientInput({
  className = "",
  value,
  placeholder,
}: Props) {
  return (
    <input
      className={clsx(
        `p-2 w-full rounded-lg focus:outline-none bg-darkSecondary input-gradient`,
        className
      )}
      type="text"
      value={value}
      placeholder={placeholder ? placeholder : undefined}
    />
  );
}
