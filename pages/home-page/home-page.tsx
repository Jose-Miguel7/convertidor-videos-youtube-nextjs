'use client'

import Footer from "@/components/layouts/footer"
import Navbar from "@/components/layouts/navbar"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import VideoSection from "./video-section"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export type Format = {
    resolution: string
    extension: string
    filesize: string
    video_url: string
}

type Response = {
    title: string
    description: string
    thumbnail: string
    channel_id: string
    channel_url: string
    publish_date: string
    views: number
    duration: number
    keywords: string[]
    formats: Format[]
    error?: string
    detail?: string
}

export default function HomePage() {
    const [url, setUrl] = useState('')
    const [response, setResponse] = useState<Response | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!url) return

        setLoading(true)
        setResponse(null)
        const res = await fetch('/api/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })

        const data = await res.json() as Response
        setLoading(false)
        if (data.error || data.detail) {
            toast({
                title: 'Error',
                description: data.error || data.detail,
            })
            return
        }
        setResponse(data)
    }

    return (
        <div>

            <Navbar />


            <main className="">

                <div className="h-[400px] bg-[#F5F5F5] dark:bg-[#444] flex flex-col gap-3 items-center justify-center px-5">
                    <h1 className="text-[25px] text-center">
                        Descarga videos y audios de YouTube
                    </h1>
                    <h3 className="text-[13px] text-center">
                        Descarga vídeos de Youtube en MP3, MP4, webp, ... y muchos más formatos
                    </h3>

                    <form className="flex items-center w-[90%] max-w-[1000px] mt-[10px]" onSubmit={handleSubmit}>
                        <div className="p-[1px] w-full bg-white dark:bg-black rounded-l-lg">
                            <input
                                type="text"
                                className="w-full p-[12px] rounded-lg outline-none text-[15px] placeholder:dark:text-gray-200"
                                placeholder="Pega el enlace aquí"
                                name="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                        <Button 
                            type="submit"
                            className="bg-blue-600 h-full rounded-l-none hover:bg-blue-600 rounded-r-lg px-3"
                            disabled={!url || loading}
                        >
                            {loading ? (
                                <span className="loader-button w-[24px] h-[24px]"></span>
                            ) : (
                                <ArrowRight className="text-white" />
                            )}
                        </Button>
                    </form>

                    <span className="text-[12px] dark:text-gray-300">
                        Al utilizar nuestro servicio, usted acepta nuestros <a href="/terms" className="text-blue-600">Términos de uso</a>
                    </span>

                </div>

                {response?.title && (
                    <VideoSection
                        streams={response?.formats}
                        duration={response?.duration}
                        title={response?.title}
                        thumb={response?.thumbnail}
                        views={response?.views}
                    />
                )}


                <section className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-32 py-20 border-b-[1px] dark:border-[#555]">
                    <div className="flex justify-center items-center">
                        <Image src="/yt.png" alt="Youtube" width={500} height={500} className="w-[200px]" />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-center text-[20px] font-[500]">
                            Convertidor de videos de YouTube
                        </h2>
                        <span className="text-[14px] font-[300]">
                            Descarga tu video es una plataforma para poder convertir videos de Youtube a formatos MP4, MP3, 3GP, y más.
                            En caso que necesites una servicio API para utilizar nuestros servicios, deberás iniciar sesión, y así, obtendras
                            tu API Key para utilizarla dentro de la API.
                        </span>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-32 py-20 border-b-[1px] dark:border-[#555] gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-center text-[20px] font-[500]">
                            Convertidor de videos y audios
                        </h2>
                        <span className="text-[14px] font-[300]">
                            Descarga tu video permite convertir y descargar videos de YouTube en distintos tipos de formatos, como MP4, MP3, 3GP, etc. Puedes descargar videos de YouTube de forma gratuita.
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-center text-[20px] font-[500]">
                            Servicio API

                        </h2>
                        <span className="text-[14px] font-[300]">
                            DescargaTuVideo ofrece un servicio API para poder utilizar nuestros servicios de forma programática. Para poder utilizar la API, deberás pedir tu API_TOKEN al correo <a href="mailto:descargatuvideoyt@gmail.com" className="text-blue-500">descargatuvideoyt@gmail.com</a>
                        </span>
                    </div>
                </section>

                <section className="grid grid-cols-1 mx-10 md:mx-32 py-20 gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <h2 className="text-center text-[20px] font-[500]">
                            Instrucciones
                        </h2>
                        <ul className="text-[14px] font-[300] flex flex-col gap-5">
                            <li>
                                1. Busque por nombre o pegue directamente el enlace del video que desea convertir
                            </li>
                            <li>
                                2. Haga clic en el botón {'"'}Iniciar{'"'} para comenzar el proceso de conversión
                            </li>
                            <li>
                                3. Seleccione el formato de video/audio que desea descargar, luego haga clic en el botón {'"'}Descargar{'"'}
                            </li>
                        </ul>
                    </div>

                </section>


            </main>

            <Footer />
        </div>
    )
}