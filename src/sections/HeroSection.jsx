import Image from "next/image";
import BG from "@/assets/landing_bg.svg";
import arrow from "@/assets/arrow.svg";
import HPLogo from "@/assets/hp.png";
import SamsungLogo from "@/assets/samsung.png";
import GpayLogo from "@/assets/gpay.png";
import MicrosoftLogo from "@/assets/microsoft.png";
import AdobeLogo from "@/assets/adobe.png";
import SpotifyLogo from "@/assets/spotify.png";
import Link from "next/link";

const Logos = [
  MicrosoftLogo,
  HPLogo,
  GpayLogo,
  AdobeLogo,
  MicrosoftLogo,
  SpotifyLogo,
  GpayLogo,
  SamsungLogo,
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <Image
        src={BG}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="z-1 flex flex-col items-center justify-center mb-18">
        <h2 className="text-5xl font-semibold w-[460px] mb-14">
          Create, connect, and unlock your full potential.
        </h2>
        <div className="flex gap-[15px]">
          <Link href="#membership" className="py-3 px-5 bg-[#2B93CA] font-semibold rounded-xl text-[#151520]">
            Get Membership
          </Link>
          <Link href="#" className="py-3 px-5 rounded-xl flex items-center justify-center font-semibold text-[#2B93CA]">
            <p>Explore Benefits</p>
            <Image
              src={arrow}
              alt="Arrow"
              className="inline-block ml-2 w-4 h-4"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center absolute bottom-3">
          <span className="text-[10px] font-semibold text-[#828282]">
            OUR PARTNERS
          </span>
          <div className="flex items-center justify-between gap-4 w-full">
            {Logos.map((logo, idx) => (
              <Image key={idx} src={logo} alt="logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
