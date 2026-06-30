export const CORS_HEADERS = {
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function optionsResponse() {
    return new Response(null, {status: 204, headers: CORS_HEADERS})
}
