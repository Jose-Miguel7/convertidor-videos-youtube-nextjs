export default function Footer() {
    return (
        <footer className=" flex flex-col items-center justify-center py-7 border-t-[1px] dark:border-[#555]">
            <div className="flex items-center gap-5">
                <span className="text-[13px]">
                    Copyright © 2024 DescargaTuVideo
                </span>
            </div>

            <div className="flex gap-5 mt-5 text-[12px] text-blue-600">
                <a href="/terms">Términos y condiciones</a>
            </div>
        </footer>
    )
}