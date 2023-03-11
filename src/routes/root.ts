import { FastifyPluginAsync } from 'fastify'
import { PropelService } from '../services/propel-service';
import { PropelStatsResponse } from '../types/propel-stats-response';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const propelService = new PropelService(fastify);

  fastify.get('/', {
    schema: {
      tags: ['propel'],
      summary: 'Propel health check',
    },
  }, async function (request, reply) {
    return { root: true }
  });

  fastify.get('/vault-stats', {
    schema: {
      tags: ['propel'],
      summary: 'Get propel stats',
      description: 'Get propel stats',
      response: {
        200: PropelStatsResponse,
      },
    },
  }, async function (request, reply) {
    return reply.send(await propelService.getPropelStats());
  });
}

export default root;
