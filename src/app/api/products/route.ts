import { NextResponse } from "next/server";
import { prisma } from "src/prisma-client";

export async function GET(req: Request) {
    try {
        const products = await prisma.product.findMany()
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error });
    }
}