import { FastifyInstance } from 'fastify';
import { StakeAuthzGrantsRepository } from '../repository/stake-authz-grants-repository';
import { StakingGrantRecord } from '../schema/grant-record-schema';
import { CreateStakingGrantRecordRequest, UpdateStakingGrantRecordRequest } from '../types/grant-record-request';
import { DeleteResult } from 'mongodb';
import { UpdateObjectResponse } from '../types/update-object-response';

export class StakeAuthzGrantsService {
    stakeAuthzGrantsRepository: StakeAuthzGrantsRepository;
    constructor(fastify: FastifyInstance) {
        this.stakeAuthzGrantsRepository = new StakeAuthzGrantsRepository(fastify);
    }

    async getStakeAuthzGrantsCount(): Promise<number> {
        return this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCount();
    }
    
    async getStakeAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCountByGranter(granter);
    }
    
    async getStakeAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return this.stakeAuthzGrantsRepository.getStakeAuthzGrantsCountByGrantee(grantee);
    }
    
    async getStakeAuthzGrantsByGranter(granter: string): Promise<StakingGrantRecord[]> {
        return this.stakeAuthzGrantsRepository.getStakeAuthzGrantsByGranter(granter);
    }
    
    async getStakeAuthzGrantsByGrantee(grantee: string): Promise<StakingGrantRecord[]> {
        return this.stakeAuthzGrantsRepository.getStakeAuthzGrantsByGrantee(grantee);
    }
    
    async updateStakeAuthzGrant(id: string, stakeAuthzGrantRequest: UpdateStakingGrantRecordRequest): Promise<UpdateObjectResponse> {
        const updateResult = this.stakeAuthzGrantsRepository.updateStakeAuthzGrant(id, stakeAuthzGrantRequest);
        const response: UpdateObjectResponse = {updated: (await updateResult).acknowledged};
        return response;
    }
    
    async deleteStakeAuthzGrant(id: string): Promise<DeleteResult> {
        return this.stakeAuthzGrantsRepository.deleteStakeAuthzGrant(id);
    }

    async deleteStakeAuthzGrantsByQuery(query: any): Promise<DeleteResult> {
        return this.stakeAuthzGrantsRepository.deleteStakeAuthzGrantsByQuery(query);
    }
    
    async createStakeAuthzGrantRecord(stakeGrantRecordRequest: CreateStakingGrantRecordRequest): Promise<StakingGrantRecord> {
        const stakeGrantRecord: StakingGrantRecord = {
            grantee: stakeGrantRecordRequest.grantee,
            granter: stakeGrantRecordRequest.granter,
            chainId: stakeGrantRecordRequest.chainId,
            chosenEpochDuration: stakeGrantRecordRequest.chosenEpochDuration,
            maxAmount: stakeGrantRecordRequest.maxAmount,
            allowList: stakeGrantRecordRequest.allowList? stakeGrantRecordRequest.allowList: [],
            blockList: stakeGrantRecordRequest.blockList? stakeGrantRecordRequest.blockList: [],
            expiration: new Date(stakeGrantRecordRequest.expiration).toISOString(),
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
        };
        const insertResult = await this.stakeAuthzGrantsRepository.insertStakeAuthzGrant(stakeGrantRecord);
        console.log(`insertResult: ${JSON.stringify(insertResult)}`);
        return stakeGrantRecord;
    }
}