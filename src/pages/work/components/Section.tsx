import { ReactNode } from "react";

type SectionProps = {
  background: string;
  header: string;
  subheader: string;
  items: string[];
  children: ReactNode;
};

export default function Section({
  background,
  header,
  subheader,
  items,
  children,
}: SectionProps) {
  return (
    <section className="px-4 md:px-8 lg:px-12">
      <div
        className="w-full min-h-[50dvh] lg:min-h-[70dvh] rounded-lg object-cover"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: "center"
        }}
      />
      <div className="flex flex-col lg:flex-row justify-between gap-4 py-8">
        <div className="flex flex-col items-start gap-3 w-full lg:w-1/2">
          <h1 className="text-[28px] leading-[30px] lg:text-[36px] lg:leading-[38px] font-serif font-normal">{header}</h1>
          <p className="text-[17px] leading-[26px] font-sans font-normal">{subheader}</p>
        </div>

        <ul>
          {items.map((item) => {
            return <li key={item} className="text-[17px] leading-[26px] font-normal capitalize">{item}</li>;
          })}
        </ul>
      </div>

      {children}
    </section>
  );
}