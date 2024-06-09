import { API_URL } from "@/utils/constants"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const body = await request.json()
    const url = body.url
    try {
        const res = await fetch(`${API_URL}/convertir/?url=${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${process.env.API_KEY}`
            }
        })

        const json = await res.json()
        return new Response(JSON.stringify(json))
    } catch (error: any) {
        return new Response(JSON.stringify({ error: 'Hubo un error al realizar la solicitud.' }), { status: 500 })
    }
}