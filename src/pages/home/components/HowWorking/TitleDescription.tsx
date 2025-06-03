import Tag from "../../../../components/Tag";

const TitleDescription = () => {
  return (
    <aside className="lg:py-24 not-lg:py-10 container flex">
      <div className="flex not-lg:flex-col lg:gap-18.5 not-lg:gap-5 items-end">
        <div className="w-[60%] not-lg:w-full flex gap-4 flex-col">
          <Tag name="Veja como funciona" />
          <h2 className="text-6xl  font-medium text-[var(--primary-navy)]">
            Sua tranquilidade não tem preço!
          </h2>
        </div>
        <div className="w-full">
          <p className="text-[var(--primary-subtitle)] text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default TitleDescription;
