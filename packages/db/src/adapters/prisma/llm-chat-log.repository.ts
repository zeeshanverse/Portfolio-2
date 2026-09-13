import type { PrismaClient } from '../../generated/prisma/client.js'
import type { LlmChatLog, CreateLlmChatLogInput } from '@portfolio/shared'

export class PrismaLlmChatLogRepository {
  constructor(private readonly db: PrismaClient) {}

  create(data: CreateLlmChatLogInput): Promise<LlmChatLog> {
    return this.db.llmChatLog.create({ data })
  }

  findBySession(sessionId: string): Promise<LlmChatLog[]> {
    return this.db.llmChatLog.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
    })
  }
}
