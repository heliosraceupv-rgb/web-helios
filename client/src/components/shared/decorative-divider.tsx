interface Props {
  centered?: boolean;
}

export default function DecorativeDivider({ centered = false }: Props) {
  return (
    <div className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
      <div className="h-[3px] w-10 rounded-full bg-yellow-500" />
      <div className="h-[3px] w-5 rounded-full bg-yellow-500/50" />
      <div className="h-[3px] w-2 rounded-full bg-yellow-500/25" />
    </div>
  );
}
