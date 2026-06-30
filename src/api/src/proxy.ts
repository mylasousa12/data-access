import {NextRequest, NextResponse} from 'next/server'
import {verifyToken} from '@/core/api/Helpers/JWT'

const ALLOWED_ORIGIN = 'http://localhost:3001'

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
}

const PUBLIC_ROUTES = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/forgot-password/request',
]

export function proxy(request: NextRequest) {
    if (request.method === 'OPTIONS') {
        return new NextResponse(null, {status: 204, headers: CORS_HEADERS})
    }

    let response: NextResponse

    if (PUBLIC_ROUTES.includes(request.nextUrl.pathname)) {
        response = NextResponse.next()
    } else {
        const authHeader = request.headers.get('authorization')
        const token = authHeader?.split(' ')[1]

        if (!token) {
            response = NextResponse.json(
                {success: false, message: 'Unauthorized'},
                {status: 401}
            )
        } else {
            try {
                verifyToken(token)
                response = NextResponse.next()
            } catch {
                response = NextResponse.json(
                    {success: false, message: 'Unauthorized'},
                    {status: 401}
                )
            }
        }
    }

    Object.entries(CORS_HEADERS).forEach(([key, value]) => {
        response.headers.set(key, value)
    })

    return response
}

export const config = {
    matcher: '/auth/:path*',
}
