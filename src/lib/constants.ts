export const QUERY_KEYS = {
  profile: {
    all: ["profile"],
    list: ["profile", "list"],
    byId: (userId: string) => ["profile", "byId", userId],
  },
  post: {
    all: ["post"],
    list: ["post", "list"],
    byId: (userId: number) => ["post", "byId", userId],
  },
};

export const BUCKET_NAME = "uploads";
