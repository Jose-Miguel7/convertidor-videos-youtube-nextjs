import { Format } from "./home-page";

export default function VideoSection({ streams, thumb, title, views, duration }: { streams: Format[], thumb: string, title: string, views: number, duration: number }) {
    return (
        <section className="px-5 lg:px-32 xl:px-36 flex flex-col md:flex-row mt-5 gap-5">

            <div className="flex justify-start items-center flex-col">
                <img src={thumb} alt={title} className="w-[600px] max-w-[400px] object-contain" />

                <div className="font-[600] text-[12px] my-4">{title}</div>
                <div className="font-[500] text-[12px]">Vistas: {views}</div>
                <div className="font-[500] text-[12px]">Duración: {duration} min</div>
            </div>



            <div className="overflow-x-auto w-full">
                <table className="w-full border border-[#F5F5F5] dark:border-[#555] border-spacing-0">
                    <thead>
                        <tr>
                            <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Resolución</th>
                            <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Tamaño Archivo</th>
                            <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Extensión</th>
                            <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {streams?.map((stream, index) => (
                            <tr key={index} className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">{stream.resolution}</td>
                                <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">{stream.filesize}</td>
                                <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">{stream.extension}</td>
                                <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                    <a href={stream.video_url} className="text-blue-500 hover:underline">Descargar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}