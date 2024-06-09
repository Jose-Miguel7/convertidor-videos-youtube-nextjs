import CodeBlock from "@/components/code";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { API_URL } from "@/utils/constants";

export const revalidate = 0

const jsonResponse = `{
    "title": "Título del video",
    "description": "Descripción del video",
    "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    "channel_id": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    "channel_url": "https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw",
    "publish_date": "2020-01-01T00:00:00Z",
    "views": 1500000,
    "duration": 4.13,
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "author": "Nombre del Canal",
    "formats": [
        {
            "resolution": "720p",
            "extension": "mp4",
            "filesize": "50.5 mb",
            "video_url": "https://..."
        },
        {
            "resolution": "1080p",
            "extension": "mp4",
            "filesize": "30.2 mb",
            "video_url": "https://..."
        },
        {
            "resolution": "Audio",
            "extension": "webm",
            "filesize": "5.5 mb",
            "video_url": "https://..."
        }
    ]
}`

const errorResponse = `{"detail": "Token inválido o caducado."}`

export default function Page() {
    return (
        <>

            <div>
                <Navbar />

                <main className="mx-7 lg:mx-[300px] my-16 flex flex-col justify-center">
                    <div className="">
                        <h1 className="font-semibold text-[20px]">Documentación API</h1>
                        <h2 className="mt-12 font-semibold text-[18px]">Autenticación</h2>
                        <p className="my-5 text-[14px]">Por seguridad, debes enviar el access token por header cada vez que realices llamadas a la API.</p>

                        <div className="overflow-x-auto w-full">
                            <table className="w-full border border-[#F5F5F5] dark:border-[#555] border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Header</th>
                                        <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">Authorization</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">Token $API_TOKEN</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="my-2 text-primary-gray text-xs">Para obtener un API_TOKEN se debe contactar con el siguiente correo: <a href="#" className="text-blue-500">contacto@descargatuvideo.cl</a></p>
                        </div>

                        <h2 className="mt-12 font-semibold text-[18px]">Obtener información y Links de descarga de un Video</h2>
                        <p className="my-5 text-[14px]">Por seguridad, debes enviar el access token por header cada vez que realices llamadas a la API.</p>
                        <p className="my-5 text-[14px] font-[500]">Request</p>
                        <div className=" my-4 w-full text-[13px]">
                            <CodeBlock 
                                language="language-js"
                                code={`curl -X GET -H 'Authorization: Token $API_TOKEN' ${API_URL}/convertir?url=$URL`}
                            />
                        </div>
                        <p className="my-5 text-[14px] font-[500]">Parámetros</p>

                        <div className="overflow-x-auto w-full">
                            <table className="w-full border border-[#F5F5F5] dark:border-[#555] border-spacing-0">
                                <tbody>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">url</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <span className="font-[500]">Requerido. </span> Es el enlace del video de youtube que se pretende obtener la información.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="my-5 text-[14px] font-[500]">Response</p>

                        <div className=" my-4 w-full text-[13px]">
                            <CodeBlock 
                                language="json"
                                code={jsonResponse}
                            />
                        </div>
                        
                        <p className="my-5 text-[14px] font-[500]">Posibles códigos de respuesta</p>

                        <div className="overflow-x-auto w-full">
                            <table className="w-full border border-[#F5F5F5] dark:border-[#555] border-spacing-0">
                                <thead>
                                    <tr>
                                        <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Código</th>
                                        <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Descripción</th>
                                        <th className="bg-[#F5F5F5] dark:bg-[#555] font-semibold p-5 text-left text-[12px]">Ejemplo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">200 OK</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">La solicitud fue exitosa y se devuelve la información del video.</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <CodeBlock 
                                                language="json"
                                                code={`{ "title": "Título del video.", ... }`}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">400 Bad Request</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">La solicitud es incorrecta. Verifica que el enlace del video sea correcto.</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <CodeBlock 
                                                language="json"
                                                code={`{"error": "La solicitud es incorrecta."}`}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">401 Unauthorized</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">El token de autorización es inválido o ha caducado.</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <CodeBlock 
                                                language="json"
                                                code={errorResponse}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">404 Not Found</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">El video no se pudo encontrar. Verifica que la URL es correcta.</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <CodeBlock 
                                                language="json"
                                                code={`{ "error": "El video no se pudo encontrar." }`}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#F5F5F5] dark:hover:bg-[#555]">
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">500 Internal Server Error</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">Hubo un error en el servidor. Inténtalo de nuevo más tarde.</td>
                                        <td className="border-b border-[#F5F5F5] dark:border-[#555] p-5 text-[11px] font-light">
                                            <CodeBlock 
                                                language="json"
                                                code={`{ "error": "Hubo un error en el servidor." }`}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}
