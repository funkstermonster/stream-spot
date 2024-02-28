import { db } from "@/lib/db";
import { getCurrentUser } from "./auth-service";

export const getRecommended = async () => {
  let userId;
  try {
    const self = await getCurrentUser();
    userId = self.id;
  } catch {
    userId = null;
  }

  let users: any[] = [];

  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
