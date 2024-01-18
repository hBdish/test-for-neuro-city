const ENV = {
  PORT: Number(process.env.SERVES_PORT) ?? 3000,
  DB_USER: process.env.POSTGRES_USER ?? '',
  DB_PASSWORD: process.env.POSTGRES_PASSWORD ?? '',
  DB_HOST: process.env.POSTGRES_HOST ?? 'localhost',
  DB_PORT: Number(process.env.POSTGRES_PORT) ?? 3001,
  DN_NAME: process.env.POSTGRES_DB ?? '',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET ?? '',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET ?? ''
}

export {ENV}