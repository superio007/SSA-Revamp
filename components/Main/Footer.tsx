import SSAFooter from "@/assets/SSAFooter.webp";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full flex flex-col md:flex-row items-center p-6 xl:py-20">
        {/* Logo */}
        <div className="w-full md:w-[30%] flex md:justify-center items-center">
          <Image
            src={SSAFooter}
            alt="SSA Footer"
            width={180}
            height={60}
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[70%] flex flex-col gap-6 mt-6 md:mt-0">
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
            <Link
              className="capitalize text-[16px] font-normal"
              href="/about-us"
            >
              about us
            </Link>
            <Link
              className="capitalize text-[16px] font-normal"
              href="/coaches"
            >
              coaches
            </Link>
            <Link className="capitalize text-[16px] font-normal" href="/news">
              news
            </Link>
            <Link
              className="capitalize text-[16px] font-normal"
              href="/matches"
            >
              matches
            </Link>
            <Link className="capitalize text-[16px] font-normal" href="/events">
              events
            </Link>
            <Link className="capitalize text-[16px] font-normal" href="/faqs">
              FAQs
            </Link>
            <Link
              className="capitalize text-[16px] font-normal"
              href="/programs"
            >
              programs
            </Link>
            <Link
              className="capitalize text-[16px] font-normal"
              href="/amenities"
            >
              amenities
            </Link>
            <Link className="capitalize text-[16px] font-normal" href="/blogs">
              blogs
            </Link>
          </div>

          <div className="w-full h-px bg-black" />

          {/* Address + Social */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex flex-col gap-4">
              <h2 className="capitalize text-[#99B81B] font-medium text-xl">
                signature slam academy
              </h2>

              <p className="text-[16px] font-normal">
                30 wills hill road, lovedale, nSW
              </p>

              <div className="flex items-center gap-3">
                <Phone color="#99B81B" size={18} />
                <a href="tel:+915642589752" className="text-[16px]">
                  +91 5642589752
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail color="#99B81B" size={18} />
                <a href="mailto:info@ssagroup.com" className="text-[16px]">
                  info@ssagroup.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#99B81B] font-medium text-xl">
                Connect with us
              </h2>

              <div className="flex gap-4 items-center">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:cursor-pointer"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:cursor-pointer"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:cursor-pointer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:cursor-pointer"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar (desktop) */}
      <div className="bg-[linear-gradient(90.14deg,#003A5D_22.84%,#99B81B_89.63%)] hidden md:flex justify-between p-3">
        <p className="text-white capitalize">terms and condition</p>
        <p className="text-white text-center">
          © {year} All Rights Reserved www.signatureslamacademy.com
        </p>
        <p className="text-white capitalize">privacy policy</p>
      </div>

      {/* Bottom bar (mobile) */}
      <div className="bg-[linear-gradient(90.14deg,#003A5D_22.84%,#99B81B_89.63%)] md:hidden flex flex-col py-3 px-6">
        <div className="flex justify-between">
          <p className="text-white capitalize">terms and condition</p>
          <p className="text-white capitalize">privacy policy</p>
        </div>

        <p className="text-white w-full text-center mt-2">
          © {year} All Rights Reserved www.signatureslamacademy.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
