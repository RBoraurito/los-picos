import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  SANITY_PROJECT_ID: z.string(),
  SANITY_DATASET_NAME: z.string(),
});

const envServer = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
});

if (!envServer.success) {
  console.error(envServer.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const env = envServer.data;
