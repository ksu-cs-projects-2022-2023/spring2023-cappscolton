import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client/edge";
import type { ToolProvider } from "@prisma/client/edge";
const prisma = new PrismaClient();

type OutputType = {
  toolProviderSet: {
    id: string;
    name: string;
  }[];
};

export const load: PageServerLoad<OutputType> = async ({}) => {
  const toolProviderSet = await prisma.toolProvider.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return { toolProviderSet };
};
