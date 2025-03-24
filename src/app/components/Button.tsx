"use client";
export default function Button({
  onPress,
  text,
  bgColor = "#EB145B",
  hoverBg,
  btnStyles,
}: {
  onPress: () => void;
  text: string;
  bgColor?: string;
  hoverBg?: string;
  btnStyles?: string;
}) {
  return (
    <button
      onClick={onPress}
      className={`px-4 py-2 text-white font-medium transition-colors duration-200 bg-[${bgColor}] hover:bg-[${hoverBg}] ${btnStyles}`}
    >
      {text}
    </button>
  );
}
