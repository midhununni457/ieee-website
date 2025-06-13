import Image from "next/image";
import logo from "@/assets/logo.svg";
import gallery1 from "@/assets/gallery_1.png";
import gallery2 from "@/assets/gallery_2.png";
import gallery3 from "@/assets/gallery_3.png";
import gallery4 from "@/assets/gallery_4.png";
import gallery5 from "@/assets/gallery_5.png";
import gallery6 from "@/assets/gallery_6.png";
import gallery7 from "@/assets/gallery_7.png";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="flex flex-col items-center justify-center py-20"
    >
      <Image src={logo} alt="IEEE Logo" className="mb-17"/>
      <div className="py-2 px-15 bg-[#2B93CA]/6 text-xs font-bold text-[#2B93CA]/60 mb-6 rounded-full">
        GALLERY
      </div>
      <h2 className="text-5xl font-bold text-white mb-8 w-[300px] text-center">
        Glimpses of IEEE MEC
      </h2>
      <p className="text-sm w-[650px] text-center tracking-wider text-[#ffffff]/60 mb-12">
        Copy & paste prebuilt animations directly into your own project, or
        customise React components using natural language with Vercel's AI code
        editor.
      </p>
      <div className="flex flex-col gap-[18px] w-[700px] justify-center items-center">
        <div className="flex gap-[12px]">
          <Image
            src={gallery1}
            alt="Gallery Image 1"
          />
          <Image
            src={gallery2}
            alt="Gallery Image 2"
          />
        </div>
        <div className="flex gap-[12px]">
          <Image
            src={gallery3}
            alt="Gallery Image 3"
          />
        </div>
        <div className="flex gap-[12px]">
           <Image
            src={gallery4}
            alt="Gallery Image 4"
          />
          <Image
            src={gallery5}
            alt="Gallery Image 5"
          />
        </div>
        <div className="flex gap-[12px]">
          <Image
            src={gallery6}
            alt="Gallery Image 6"
          />
          <Image
            src={gallery7}
            alt="Gallery Image 7"
          />
        </div>
      </div>
    </section>
  );
}
