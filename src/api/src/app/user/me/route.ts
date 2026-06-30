import {verifyToken} from "@/core/api/Helpers/JWT";
import {prisma} from "@/lib/prisma";
import {optionsResponse, CORS_HEADERS} from "@/core/api/Helpers/Cors";

export function OPTIONS() {
    return optionsResponse()
}

export async function GET(request: Request) {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader?.startsWith('Bearer ')) {
        return Response.json({error: 'Unauthorized'}, {status: 401, headers: CORS_HEADERS});
    }

    const rawToken = authHeader.split(' ')[1];
    console.log('[/user/me] token recebido:', JSON.stringify(rawToken));

    let decoded: {userId: number; type: string};
    try {
        decoded = verifyToken(rawToken) as unknown as {userId: number; type: string};
    } catch (e) {
        console.error('[/user/me] JWT error:', e);
        return Response.json({error: 'Invalid token'}, {status: 401, headers: CORS_HEADERS});
    }

    try {
        const user = await prisma.users.findUnique({
            where: {id: decoded.userId},
            select: {id: true, name: true, email: true, address: true, number: true, cep: true, state: true, complement: true}
        });

        if (!user) {
            return Response.json({error: 'User not found'}, {status: 404, headers: CORS_HEADERS});
        }

        return Response.json({user}, {headers: CORS_HEADERS});
    } catch (e) {
        console.error('[/user/me] Prisma error:', e);
        return Response.json({error: 'Database error'}, {status: 500, headers: CORS_HEADERS});
    }
}
