import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/constants/dbSchema.ts",
  out: "./drizzle"
})
