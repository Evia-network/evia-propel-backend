import { FastifyInstance } from 'fastify';
import { LPMiningAuthzGrantsRepository } from '../repository/lp-mining-authz-grants-repository';
import { LPMiningGrantRecord } from '../schema/grant-record-schema';
import { LPMiningGrantRecordRequest } from '../types/grant-record-request';


export class LPMiningAuthzGrantsService {
    lpMiningAuthzGrantsRepository: LPMiningAuthzGrantsRepository;
    constructor(fastify: FastifyInstance) {
        this.lpMiningAuthzGrantsRepository = new LPMiningAuthzGrantsRepository(fastify);
    }

    async getLPMiningAuthzGrantsCount(): Promise<number> {
        return await this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCount();
    }
    
    async getLPMiningAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return await this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCountByGranter(granter);
    }
    
    async getLPMiningAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return await this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsCountByGrantee(grantee);
    }
    
    async getLPMiningAuthzGrantsByGranter(granter: string): Promise<LPMiningGrantRecord[]> {
        return await this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsByGranter(granter);
    }
    
    async getLPMiningAuthzGrantsByGrantee(grantee: string): Promise<LPMiningGrantRecord[]> {
        return await this.lpMiningAuthzGrantsRepository.getLPMiningAuthzGrantsByGrantee(grantee);
    }
    
    async updateLPMiningAuthzGrant(id: string, lpMiningAuthzGrantRequest: LPMiningGrantRecordRequest): Promise<LPMiningGrantRecord> {
        return await this.lpMiningAuthzGrantsRepository.updateLPMiningAuthzGrant(id, lpMiningAuthzGrantRequest);
    }
    
    async deleteLPMiningAuthzGrant(id: string): Promise<LPMiningGrantRecord> {
        return await this.lpMiningAuthzGrantsRepository.deleteLPMiningAuthzGrant(id);
    }
    
}