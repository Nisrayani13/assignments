import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

const dropDataInTables=async function () {
    await prisma.user.deleteMany();
    await prisma.todo.deleteMany();
}

export default dropDataInTables;