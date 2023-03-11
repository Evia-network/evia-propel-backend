import { FastifyPluginAsync } from "fastify"
import { LPMiningAuthzGrantsService } from "../../services/lp-mining-authz-grants-service"
import { LPMiningGrantRecord } from "../../schema/grant-record-schema"
import { Type } from "@sinclair/typebox"
import { LPMiningGrantRecordRequest } from "../../types/grant-record-request"

const lpMiningStaking: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  const lpMiningAuthzGrantsService = new LPMiningAuthzGrantsService(fastify);

  fastify.post<{
    Body: LPMiningGrantRecordRequest,
    Response: LPMiningGrantRecord,
  }>(
    '/', {
      schema: {
        tags: ['lp-mining'],
        summary: 'Create lp mining authz grant record',
        description: 'Create lp mining authz grant record',
        consumes: ['application/json'],
        body: LPMiningGrantRecordRequest,
        response: {
          200: LPMiningGrantRecord,
        },
      },
  }, async function (request, reply) {
    const grantRecordRequest = request.body as LPMiningGrantRecordRequest;
    const grantRecord = await lpMiningAuthzGrantsService.createLPMiningAuthzGrantRecord(grantRecordRequest);
    return reply.send(grantRecord);
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
