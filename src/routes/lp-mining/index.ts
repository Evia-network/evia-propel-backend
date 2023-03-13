import { FastifyPluginAsync } from "fastify"
import { LPMiningAuthzGrantsService } from "../../services/lp-mining-authz-grants-service"
import { LPMiningGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"
import { CreateLPMiningGrantRecordRequest, UpdateLPMiningGrantRecordRequest } from "../../types/grant-record-request"
import { UpdateObjectResponse } from "../../types/update-object-response"

const lpMiningStaking: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const lpMiningAuthzGrantsService = new LPMiningAuthzGrantsService(fastify);

  fastify.post<{
    Body: CreateLPMiningGrantRecordRequest,
    Response: LPMiningGrantRecord,
  }>(
    '/', {
      schema: {
        tags: ['lp-mining'],
        summary: 'Create lp mining authz grant record',
        description: 'Create lp mining authz grant record',
        consumes: ['application/json'],
        body: CreateLPMiningGrantRecordRequest,
        response: {
          200: LPMiningGrantRecord,
        },
      },
  }, async function (request, reply) {
    const grantRecordRequest = request.body as CreateLPMiningGrantRecordRequest;
    const grantRecord = await lpMiningAuthzGrantsService.createLPMiningAuthzGrantRecord(grantRecordRequest);
    return reply.send(grantRecord);
  });

  fastify.patch<{
    Body: UpdateLPMiningGrantRecordRequest,
    Response: LPMiningGrantRecord,
    Params: {
      id: string,
    },
  }>(
    '/:id', {
      schema: {
        tags: ['lp-mining'],
        summary: 'Update lp mining authz grant record',
        description: 'Update lp mining authz grant record',
        consumes: ['application/json'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        body: UpdateLPMiningGrantRecordRequest,
        response: {
          200: UpdateObjectResponse,
        },
      },
  }, async function (request, reply) {
      const grantRecordRequest = request.body as UpdateLPMiningGrantRecordRequest;
      const recordId: string = request.params.id;
      const updateResponse = await lpMiningAuthzGrantsService.updateLPMiningAuthzGrant(recordId, grantRecordRequest);
    return reply.send(updateResponse);
  });

  fastify.get<{
    Params: {
      granterAddress: string;
    },
    Response: Array<LPMiningGrantRecord>,
  }>('/granter/:granterAddress', {
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

export default lpMiningStaking;
