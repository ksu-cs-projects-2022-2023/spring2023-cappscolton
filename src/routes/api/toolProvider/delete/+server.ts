import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();
export const POST: RequestHandler = async ({ request, params }) => {
  await prisma.toolProvider.delete({
    where: {
      name: (await request.formData()).get("name")!.toString(),
    },
  });

  throw redirect(302, "/platform/admin/dashboard/activity");
};
