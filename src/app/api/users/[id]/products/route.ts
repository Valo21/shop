import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";
import jwt from 'jsonwebtoken'

export async function GET(req: Request, context: any) {
    try {
        const { id } = context.params
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        }).products()
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

export async function POST(req: Request, context: any) {
    try {
        const { id } = context.params
        const { name, price, token } = await req.json()

        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if (!verify) throw {
            message: 'Access denied'
        }

        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                products: {
                    create: {
                        name,
                        price
                    }
                }
            }
        })
        return NextResponse.json({
            userId: user.id
        });
    } catch (error) {
        return NextResponse.json({ error });
    }
}