const Tag = ({ name }: { name: string }) => {
  return (
    <span className="w-fit bg-[var(--primary-yellow)] px-5 py-4 rounded-full">
      {name}
    </span>
  );
};

export default Tag;
