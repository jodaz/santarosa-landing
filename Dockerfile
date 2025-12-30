FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
# libc6-compat might be needed for some deps
RUN apk add --no-cache libc6-compat

# 1. Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 2. Rebuild the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Explicitly copy .env.local as requested
COPY .env.local .env.local

# Check typescript errors
RUN pnpm run typecheck

# Disable telemetry during build
RUN pnpm run build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone output
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copy .env.local for runtime usage
COPY --from=builder --chown=nextjs:nodejs /app/.env.local ./

USER nextjs

EXPOSE 3050

ENV PORT=3050
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
