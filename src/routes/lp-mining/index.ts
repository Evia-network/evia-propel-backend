import { FastifyPluginAsync } from "fastify"
import { LPMiningAuthzGrantsService } from "../../services/lp-mining-authz-grants-service"
import { LPMiningGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"

const stake: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const lpMiningAuthzGrantsService = new LPMiningAuthzGrantsService(fastify);

  fastify.get('/', {
    schema: {
      tags: ['lp-mining'],
      summary: 'Get all lp mining authz grants',
      description: 'Get all lp mining authz grants',
    },
  }, async function (request, reply) {
    return 'this is an example';
  });

  fastify.get<{
    Params: {
      granterAddress: string;
    },
    Response: Array<LPMiningGrantRecord>,
  }> ('/granter/:granterAddress', {
    schema: {
      params: {
        type: 'object',
        properties: {
          granterAddress: {
            type: 'string',
          },
        },
      },
      tags: ['lp-mining'],
      summary: 'Get all lp mining authz grants by granter',
      description: 'Get all lp mining authz grants by granter',
      response: {
        200: Type.Array(LPMiningGrantRecord),
      },
    },
  }, async function (request, reply) {
    const granterAddress = request.params.granterAddress;
    const grants = await lpMiningAuthzGrantsService.getLPMiningAuthzGrantsByGranter(granterAddress);
    return reply.send(grants);
  });
}

export default stake;
