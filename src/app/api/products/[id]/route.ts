import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";

export async function GET(req: Request, context: any) {
    try {
        const { id } = context.params;
        const product = await prisma.product.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error });
    }
}