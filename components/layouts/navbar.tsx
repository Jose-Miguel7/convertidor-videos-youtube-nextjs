import Link from "next/link";
import ModeToggle from "../toggle-theme/toggle-theme";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-2 px-5 sm:px-14">
            <div>
                <h2 className="font-[500]">DescargaTuVideo</h2>
            </div>

            <div className="flex items-center gap-5">
                <ModeToggle />
                <ul className="flex gap-10 items-center">
                    <li className="text-[13px]">
                        <Link href="/">
                            Convertidor
                        </Link>
                    </li>
                    <li className="text-[13px]">
                        <Link href="/docs">
                            API
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}