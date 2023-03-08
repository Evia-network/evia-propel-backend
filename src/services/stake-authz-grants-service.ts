import { FastifyInstance } from 'fastify';
import { StakeAuthzGrantsRepository } from '../repository/stake-authz-grants-repository';
import { StakingGrantRecord } from '../schema/grant-record-schema';
import { StakingGrantRecordRequest } from '../types/grant-record-request';


export class StakeAuthzGrantsService {
    stakeAuthzGrantsRepository: StakeAuthzGrantsRepository;
    constructor(fastify: FastifyInstance) {
        this.stakeAuthzGrantsRepository = new StakeAuthzGrantsRepository(fastify);
    }

    async getStakeAuthzGrantsCount(): Promise<number> {
        return await this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCount();
    }
    
    async getStakeAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return await this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCountByGranter(granter);
    }
    
    async getStakeAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return await this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCountByGrantee(grantee);
    }
    
    async getStakeAuthzGrantsByGranter(granter: string): Promise<StakingGrantRecord[]> {
        return await this.stakeAuthzGrantsRepository.getStakeAuthzGrantsByGranter(granter);
    }
    
    async getStakeAuthzGrantsByGrantee(grantee: string): Promise<StakingGrantRecord[]> {
        return await this.stakeAuthzGrantsRepository.getStakeAuthzGrantsByGrantee(grantee);
    }
    
    async updateStakeAuthzGrant(id: string, stakeAuthzGrantRequest: StakingGrantRecordRequest): Promise<StakingGrantRecord> {
        return await this.stakeAuthzGrantsRepository.updateStakeAuthzGrant(id, stakeAuthzGrantRequest);
    }
    
    async deleteStakeAuthzGrant(id: string): Promise<StakingGrantRecord> {
        return await this.stakeAuthzGrantsRepository.deleteStakeAuthzGrant(id);
    }
    
}