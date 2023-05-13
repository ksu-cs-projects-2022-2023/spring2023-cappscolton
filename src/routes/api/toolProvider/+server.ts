import { redirect } from "@sveltejs/kit";
import type { RequestHandler, RequestEvent } from "./$types";
import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
  var formData = await request.formData();

  await prisma.toolProvider.create({
    data: {
      name: formData.get("name")!.toString(),
      oauthKey: formData.get("oauthKey")!.toString(),
      oauthSecret: formData.get("oauthSecret")!.toString(),
    },
  });
  throw redirect(302, "/platform/admin/dashboard/activity");
};
