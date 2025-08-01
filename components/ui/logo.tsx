import Link from "next/link";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={40}
        viewBox="0 0 27 40"
        {...props}
      >
        <g data-name="Group 101" transform="translate(-375 -21)">
          <rect
            data-name="Rectangle 16"
            width={16}
            height={8}
            rx={4}
            transform="translate(375 29)"
            fill="#f40051"
          />

          <rect
            data-name="Rectangle 15"
            width={20}
            height={8}
            rx={4}
            transform="translate(379 43)"
            fill="#3366ff"
          />
          <rect
            data-name="Rectangle 11"
            width={16}
            height={8}
            rx={4}
            transform="translate(383 21)"
            fill="#f2b300"
          />
        </g>
      </svg>
    </Link>
  );
}
