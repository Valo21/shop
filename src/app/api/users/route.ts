import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";
import bcrypt from 'bcrypt'

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

export async function POST(req: Request) {
    try {
        let { mail, name, surname, password } = await req.json()

        const userExists = await prisma.user.findUnique({
            where: {
                mail
            }
        })
        if (userExists) {
            throw ({
                message: 'User already exists'
            })
        }

        password = bcrypt.hashSync(password, 10);

        const user = await prisma.user.create({
            data: {
                mail,
                name,
                password,
                surname
            }
        })
        return NextResponse.json({
            id: user.id
        });
    } catch (error) {
        return NextResponse.json({ error });
    }
}