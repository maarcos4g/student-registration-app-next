import 'dotenv/config'
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string()
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});