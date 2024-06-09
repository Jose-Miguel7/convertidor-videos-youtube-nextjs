export default function LoadingAdmin() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <span className="loader"></span>
            <div className="mt-4">
                <p className="font-semibold text-sm text-center mt-3">
                </p>
                <p className="text-sm text-center dark:text-white mt-3 px-4">
                    Cargando página
                </p>
            </div>
        </div>
    )
}
