"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from 'next/link';

const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <Link href="#" className="btn btn-outline-dark"
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
        >
            <Image
                src="/la7-logo.jpg"
                alt="LA7 Logo"
                width={74}
                height={50}
                priority
            />
        </Link>
    )
}

export default Button