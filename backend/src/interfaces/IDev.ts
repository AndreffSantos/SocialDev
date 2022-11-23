import { z } from "zod"

const DevZodSchema = z.object({
  name: z.string(),
  user: z.string(),
  bio: z.string().max(140).optional(),
  avatar: z.string().optional(), 
})

type IDev = z.infer<typeof DevZodSchema>

export {
  DevZodSchema,
  IDev,
}