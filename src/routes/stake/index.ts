import { FastifyPluginAsync } from "fastify"
import { StakeAuthzGrantsService } from "../../services/stake-authz-grants-service"
import { StakingGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"
import { CreateStakingGrantRecordRequest, UpdateStakingGrantRecordRequest } from "../../types/grant-record-request"
import { UpdateObjectResponse } from "../../types/update-object-response"

const stake: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const stakeAuthzGrantService = new StakeAuthzGrantsService(fastify);

  fastify.post<{
    Body: CreateStakingGrantRecordRequest,
    Response: StakingGrantRecord,
  }>(
    '/', {
      schema: {
        tags: ['stake'],
        summary: 'Create stake authz grant record',
        description: 'Create stake authz grant record',
        consumes: ['application/json'],
        body: CreateStakingGrantRecordRequest,
        response: {
          200: StakingGrantRecord,
        },
      },
  }, async function (request, reply) {
    const grantRecordRequest = request.body as CreateStakingGrantRecordRequest;
    const grantRecord = await stakeAuthzGrantService.createStakeAuthzGrantRecord(grantRecordRequest);
    return reply.send(grantRecord);
  });

  fastify.patch<{
    Body: UpdateStakingGrantRecordRequest,
    Response: StakingGrantRecord,
    Params: {
      id: string,
    },
  }>(
    '/:id', {
      schema: {
        tags: ['stake'],
        summary: 'Update staking authz grant record',
        description: 'Update staking authz grant record',
        consumes: ['application/json'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        body: UpdateStakingGrantRecordRequest,
        response: {
          200: UpdateObjectResponse,
        },
      },
  }, async function (request, reply) {
      const grantRecordRequest = request.body as UpdateStakingGrantRecordRequest;
      const recordId: string = request.params.id;
    const updateResponse = await stakeAuthzGrantService.updateStakeAuthzGrant(recordId, grantRecordRequest);
    return reply.send(updateResponse);
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
