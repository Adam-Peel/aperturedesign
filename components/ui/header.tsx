import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";

export default function Header() {
  return (
    <header className="fixed top-2 z-10 w-full md:top-6 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center ">
            <Link href="/">
              <Image
                className="relative"
                src={Logo01}
                width={28}
                height={28}
                alt="Aperture Logo"
              />
            </Link>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/about"
                className="btn-sm text-gray-700 hover:bg-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/resources/#contact"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
