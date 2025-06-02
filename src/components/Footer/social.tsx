const Social = () => {
  return (
    <aside className="w-full flex flex-col gap-5">
      <p className="text-[var(--primary-navy)] text-base font-semibold">
        Siga em nossa redes:
      </p>
      <div className="flex gap-5">
        <a
          href=""
          className="border
            hover:bg-[var(--primary-navy)] hover:text-white transition-colors duration-300
            w-fit border-[var(--primary-navy)] py-2.5 px-5 rounded-4xl"
        >
          Instagram
        </a>
        <a
          href=""
          className="border
            hover:bg-[var(--primary-navy)] hover:text-white transition-colors duration-300
            w-fit border-[var(--primary-navy)] py-2.5 px-5 rounded-4xl"
        >
          X
        </a>
        <a
          href=""
          className="border w-fit 
            hover:bg-[var(--primary-navy)] hover:text-white transition-colors duration-300
            border-[var(--primary-navy)] py-2.5 px-5 rounded-4xl"
        >
          Facebook
        </a>
        <a
          href=""
          className="border
            hover:bg-[var(--primary-navy)] hover:text-white transition-colors duration-300
            w-fit border-[var(--primary-navy)] py-2.5 px-5 rounded-4xl"
        >
          Youtube
        </a>
      </div>
    </aside>
  );
};

export default Social;
