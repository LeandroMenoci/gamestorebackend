import { PrismaClient } from "@prisma/client";
import { produtos } from "../src/core";

const prisma = new PrismaClient();

async function seed(){
    await prisma.produto.createMany({
        data: produtos.map((produto) => ({
            ...produto,
            id: undefined
        })),
    })
}

seed()