import Image from "next/image";

const AboutChild = ({ title, heading, description, img1, img2 }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <h2 className="uppercase text-[10px] font-semibold bg-[#2B93CA]/[.06] flex items-center justify-center h-6 rounded-md text-[#2B93CA]/[.6] w-[140px]">
        {title}
      </h2>
      <h3 className="text-4xl font-semibold">{heading}</h3>
      <p className="text-lg text-white/50 w-full max-w-[634px] font-medium text-center">
        {description}
      </p>
      <div className="flex gap-6 mt-4 items-center justify-center">
        <Image src={img1} alt="img1" className="w-full max-w-[634px]" />
        {img2 && (
          <Image src={img2} alt="img2" className="w-full max-w-[634px]" />
        )}
      </div>
    </div>
  );
};

export default AboutChild;
