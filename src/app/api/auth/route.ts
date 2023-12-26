import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
    try {
        const cookieStore = cookies()
        const token = cookieStore.get(process.env.AUTH_COOKIE_NAME)

        if (!token) {
            return NextResponse.json({
                message: 'Unauthorized'
            }, {
                status: 401
            })
        }

        jwt.verify(token.value, process.env.SECRET_KEY);

        return NextResponse.json({
            user: jwt.decode(token.value)
        }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ error }, {
            status: 403
        });
    }
}