import { API_URL } from "@/utils/constants"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const body = await request.json()
    const url = body.url
    try {
        const res = await fetch(`${API_URL}/convertir/?url=${url}`, {
            method: 'GET',
        })
        const json = await res.json()
        console.log(json)
        return new Response(JSON.stringify(json))
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}