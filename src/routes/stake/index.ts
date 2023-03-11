import { FastifyPluginAsync } from "fastify"
import { StakeAuthzGrantsService } from "../../services/stake-authz-grants-service"
import { StakingGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"
import { StakingGrantRecordRequest } from "../../types/grant-record-request"

const stake: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const stakeAuthzGrantService = new StakeAuthzGrantsService(fastify);

  fastify.post<{
    Body: StakingGrantRecordRequest,
    Response: StakingGrantRecord,
  }>(
    '/', {
      schema: {
        tags: ['stake'],
        summary: 'Create stake authz grant record',
        description: 'Create stake authz grant record',
        consumes: ['application/json'],
        body: StakingGrantRecordRequest,
        response: {
          200: StakingGrantRecord,
        },
      },
  }, async function (request, reply) {
    const grantRecordRequest = request.body as StakingGrantRecordRequest;
    const grantRecord = await stakeAuthzGrantService.createStakeAuthzGrantRecord(grantRecordRequest);
    return reply.send(grantRecord);
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
