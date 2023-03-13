import { FastifyInstance } from 'fastify';
import { DeleteResult } from 'mongodb';
import { LPMiningAuthzGrantsRepository } from '../repository/lp-mining-authz-grants-repository';
import { LPMiningGrantRecord } from '../schema/grant-record-schema';
import { CreateLPMiningGrantRecordRequest, UpdateLPMiningGrantRecordRequest } from '../types/grant-record-request';
import { UpdateObjectResponse } from '../types/update-object-response';


export class LPMiningAuthzGrantsService {
    lpMiningAuthzGrantsRepository: LPMiningAuthzGrantsRepository;
    constructor(fastify: FastifyInstance) {
        this.lpMiningAuthzGrantsRepository = new LPMiningAuthzGrantsRepository(fastify);
    }

    async getLPMiningAuthzGrantsCount(): Promise<number> {
        return this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCount();
    }

    async createLPMiningAuthzGrantRecord(lpMiningGrantRecordRequest: CreateLPMiningGrantRecordRequest): Promise<LPMiningGrantRecord> {
        const lpMiningGrantRecord: LPMiningGrantRecord = {
            network: lpMiningGrantRecordRequest.network,
            grantee: lpMiningGrantRecordRequest.grantee,
            granter: lpMiningGrantRecordRequest.granter,
            poolId: lpMiningGrantRecordRequest.poolId,
            ticker: lpMiningGrantRecordRequest.ticker,
            expiration: new Date(lpMiningGrantRecordRequest.expiration).toISOString(),
            chosenEpochDuration: lpMiningGrantRecordRequest.chosenEpochDuration,
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
        };
        const insertResult = await this.lpMiningAuthzGrantsRepository.insertLPMiningAuthzGrant(lpMiningGrantRecord);
        console.log(`insertResult: ${JSON.stringify(insertResult)}`);
        return lpMiningGrantRecord;
    }
    
    async getLPMiningAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCountByGranter(granter);
    }
    
    async getLPMiningAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCountByGrantee(grantee);
    }
    
    async getLPMiningAuthzGrantsByGranter(granter: string): Promise<LPMiningGrantRecord[]> {
        return this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsByGranter(granter);
    }
    
    async getLPMiningAuthzGrantsByGrantee(grantee: string): Promise<LPMiningGrantRecord[]> {
        return this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsByGrantee(grantee);
    }
    
    async updateLPMiningAuthzGrant(id: string, lpMiningAuthzGrantRequest: UpdateLPMiningGrantRecordRequest): Promise<UpdateObjectResponse> {
        const updateResult = this.lpMiningAuthzGrantsRepository.updateLPMiningAuthzGrant(id, lpMiningAuthzGrantRequest);
        const updateResponse: UpdateObjectResponse = {updated: (await updateResult).acknowledged};
        return updateResponse;
    }
    
    async deleteLPMiningAuthzGrant(id: string): Promise<DeleteResult> {
        return this.lpMiningAuthzGrantsRepository.deleteLPMiningAuthzGrant(id);
    }
    
}