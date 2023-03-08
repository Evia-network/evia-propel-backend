import { FastifyPluginAsync } from "fastify"
import { StakeAuthzGrantsService } from "../../services/stake-authz-grants-service"
import { StakingGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"

const stake: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const stakeAuthzGrantService = new StakeAuthzGrantsService(fastify);

  fastify.get('/', {
    schema: {
      tags: ['stake'],
      summary: 'Get all staking authz grants',
      description: 'Get all staking authz grants',
    },
  }, async function (request, reply) {
    return 'this is an example';
  });

  fastify.get<{
    Params: {
      granterAddress: string;
    },
    Response: Array<StakingGrantRecord>,
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
      tags: ['stake'],
      summary: 'Get all staking authz grants by granter',
      description: 'Get all staking authz grants by granter',
      response: {
        200: Type.Array(StakingGrantRecord),
      },
    },
  }, async function (request, reply) {
    const granterAddress = request.params.granterAddress;
    const grants = await stakeAuthzGrantService.getStakeAuthzGrantsByGranter(granterAddress);
    return reply.send(grants);
  });
}

export default stake;
