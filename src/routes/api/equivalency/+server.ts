import { redirect } from "@sveltejs/kit";
import type { RequestHandler, RequestEvent } from "./$types";
import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  var formData = await request.formData();

  await prisma.equivalency.create({
    data: {
      masteryFormula: formData.get("masteryFormula")!.toString(),
      concept: formData.get("concept")!.toString(),
    },
  });
  throw redirect(302, "/platform/admin/dashboard/activity");
};
