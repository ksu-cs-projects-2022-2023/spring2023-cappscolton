import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

export const MasteryFormula = {
  ThreeCCR: "3CCR",
  FourCCR: "4CCR",
  FiveCCR: "5CCR",
  TugOfWar: "ToW",
  BKT: "BKT",
};

async function NCCR(
  n: number,
  studentId: string,
  equivalencyId: string
): Promise<number> {
  const attemps = await prisma.attempt.findMany({
    orderBy: {
      timestamp: "desc",
    },
    where: {
      studentActivity: {
        student: {
          lmsUserId: studentId,
        },
        activity: {
          equivalencyId: equivalencyId,
        },
      },
    },
    select: {
      correctness: true,
      studentActivity: {
        select: {
          activity: {
            select: {
              correctnessThreshold: true,
            },
          },
        },
      },
    },
    take: n,
  });

  console.log(attemps);

  let result = 0;
  (await attemps).reverse().forEach((attempt) => {
    if (
      attempt.correctness >=
      attempt.studentActivity.activity.correctnessThreshold / 100
    ) {
      result += 100 / n;
    } else {
      console.log(attempt.correctness);
      console.log(attempt.studentActivity.activity.correctnessThreshold);
      result = 0;
    }
    console.log(result);
  });

  return result / 100;
}

export async function computeMastery(
  masteryFormula: string,
  equivalencyId: string,
  studentId: string
) {
  if (masteryFormula === MasteryFormula.FourCCR) {
    const mastery = NCCR(4, studentId, equivalencyId);
    return mastery;
  }
  if (masteryFormula === MasteryFormula.FiveCCR) {
    const mastery = NCCR(5, studentId, equivalencyId);
    return mastery;
  }
  if (masteryFormula === MasteryFormula.TugOfWar) {
    // TODO: evaluate CUSUM Tug of War and implement. For now default to 3CCR

    const mastery = NCCR(3, studentId, equivalencyId);
    return mastery;
  }
  if (masteryFormula === MasteryFormula.BKT) {
    // TODO: evaluate BKT and implement. For now default to 3CCR

    const mastery = NCCR(3, studentId, equivalencyId);
    return mastery;
  } else {
    const mastery = NCCR(3, studentId, equivalencyId);
    return mastery;
  }
}
