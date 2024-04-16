import { z } from 'zod'

const itemTypeSchema = z.object({
  id: z.string(),
  title: z.string(),
  views: z.string(),

})
export { itemTypeSchema }