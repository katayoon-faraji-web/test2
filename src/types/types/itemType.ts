import { z } from 'zod'
import {itemTypeSchema} from '../schema.ts/itemType'
;
export type itemType = z.infer<typeof itemTypeSchema>