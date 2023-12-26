import { NextApiRequest } from "next";
import { RequestContext } from "next/dist/server/base-server";
import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";

export async function GET(req: NextApiRequest, context: any) {
    try {
        const { id } = context.params
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                mail: true,
                name: true,
                surname: true,
                rate: true
            }
        })
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error });
    }
}