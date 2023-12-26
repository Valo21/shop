import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(req: Request) {
    try {
        const { mail, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                mail
            }
        })

        if (!user) throw {
            message: "User doesn't exists"
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) throw {
            message: 'Incorrect password'
        }

        const token = jwt.sign({
            id: user.id
        }, process.env.SECRET_KEY, {
            expiresIn: MAX_AGE
        })

        const serialized = serialize(process.env.AUTH_COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: MAX_AGE,
            path: '/'
        })

        return NextResponse.json({
            token
        },
            {
                headers: { 'Set-Cookie': serialized },
                status: 200
            });
    } catch (error) {
        return NextResponse.json({ error });
    }
}