import AboutChild from "../components/AboutChild";
import Img1 from "@/assets/about1.png";
import Img2 from "@/assets/about2.png";
import Img3 from "@/assets/about3.png";
import Img4 from "@/assets/about4.png";
import HPLogo from "@/assets/hp.png";
import SamsungLogo from "@/assets/samsung.png";
import GpayLogo from "@/assets/gpay.png";
import MicrosoftLogo from "@/assets/microsoft.png";
import AdobeLogo from "@/assets/adobe.png";
import SpotifyLogo from "@/assets/spotify.png";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    {
      title: "300+",
      description: "Members",
    },
    {
      title: "50+",
      description: "Events",
    },
    {
      title: "100+",
      description: "Workshops",
    },
  ];

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

  return (
    <section
      id="about"
      className="py-24 mx-auto px-4 flex flex-col gap-12 w-full max-w-[634px]"
    >
      <AboutChild
        title="events"
        heading="What is IEEE MEC?"
        description="Copy & paste prebuilt animations directly into your own project, or customise React components using natural language with Vercel's AI code editor."
        img1={Img1}
      />
      <div className="flex justify-evenly gap-20">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-semibold bg-gradient-to-b from-[#2A82FC] to-[#014292] bg-clip-text text-transparent ">
              {stat.title}
            </h3>
            <p className="text-[15px] text-[#808088] w-full font-medium text-center">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <span className="text-[10px] font-semibold text-[#828282]">
          PREVIOUS SPONSORS
        </span>
        <div className="flex items-center justify-between w-full">
          {Logos.map((logo, idx) => (
            <Image key={idx} src={logo} alt="logo" />
          ))}
        </div>
      </div>
      <AboutChild
        title="vision"
        heading="Our Vision"
        description="Copy & paste prebuilt animations directly into your own project, or customise React components using natural language with Vercel's AI code editor."
        img1={Img2}
      />
      <AboutChild
        title="mission"
        heading="Our Mission"
        description="Copy & paste prebuilt animations directly into your own project, or customise React components using natural language with Vercel's AI code editor."
        img1={Img3}
        img2={Img4}
      />
    </section>
  );
}
