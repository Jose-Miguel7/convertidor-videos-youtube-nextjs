"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div>
                <Button variant="outline" className="border-0" size="icon">
                    {/* <Sun className="h-[1.2rem] w-[1.2rem]" /> */}
                    <span className="w-[1.2rem] h-[1.2rem]"></span>
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button
                variant="outline"
                className={`border-0 ${theme === 'light' ? 'bg-white hover:bg-white' : 'bg-[#111111] hover:bg-[#111111]'}`}
                size="icon"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'light' ? (
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                ) : (
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                )}
            </Button>
        </div>
    )
}
