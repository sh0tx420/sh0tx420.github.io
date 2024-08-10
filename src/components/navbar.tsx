import Link from "next/link";

const navlinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
    return (
        <nav className="w-full h-12 p-2">
            <div className="flex bg-neutral-700/20 backdrop-filter backdrop-opacity-50 backdrop-blur-3xl p-2 rounded-md shadow-lg">
                <Link className="hover:text-indigo-500" href="/">
                    sh0tx420.github.io
                </Link>
                <div className="px-2">
                    |
                </div>
                <div className="flex gap-2">
                    {
                        navlinks.map((item, idx) => (
                            <Link className="hover:text-indigo-500" key={idx} href={item.href}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}
