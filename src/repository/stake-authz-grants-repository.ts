import { StakingGrantRecord } from "../schema/grant-record-schema";
import { StakingGrantRecordRequest } from "../types/grant-record-request";
import { BaseRepository } from "./base-repository";

export class StakeAuthzGrantsRepository extends BaseRepository {
    STAKE_AUTHZ_GRANTS_COLLECTION_NAME = 'stake_authz_grants';

    async getStakeAuthzGrantsCount(): Promise<number> {
        return await this.countObjects(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async getStakeAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return await this.countObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getStakeAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return await this.countObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getStakeAuthzGrantsByGranter(granter: string): Promise<StakingGrantRecord[]> {
        return await this.getObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getStakeAuthzGrantsByGrantee(grantee: string): Promise<StakingGrantRecord[]> {
        return await this.getObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getStakeAuthzGrantByQuery(query: any): Promise<StakingGrantRecord> {
        return await this.getObjectByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getStakeAuthzGrantById(id: string): Promise<StakingGrantRecord> {
        return await this.getObjectById(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async insertStakeAuthzGrant(stakeAuthzGrantRequest: StakingGrantRecordRequest): Promise<StakingGrantRecord> {
        return await this.insertObject(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, stakeAuthzGrantRequest);
    }

    async updateStakeAuthzGrant(id: string, stakeAuthzGrantRequest: StakingGrantRecordRequest): Promise<StakingGrantRecord> {
        return await this.updateObject(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, id, stakeAuthzGrantRequest);
    }

    async deleteStakeAuthzGrant(id: string): Promise<StakingGrantRecord> {
        return await this.deleteObject(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async deleteStakeAuthzGrantsByQuery(query: any): Promise<StakingGrantRecord> {
        return await this.deleteObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async deleteAllStakeAuthzGrants(): Promise<StakingGrantRecord> {
        return await this.deleteAllObjects(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async updateStakeAuthzGrantsByQuery(query: any, stakeAuthzGrantRequest: StakingGrantRecordRequest): Promise<StakingGrantRecord> {
        return await this.updateObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query, stakeAuthzGrantRequest);
    }

    async getStakeAuthzGrantsByQuery(query: any): Promise<StakingGrantRecord[]> {
        return await this.getObjectsByQuery(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getStakeAuthzGrantsByQueryWithPagination(query: any, page: number, limit: number): Promise<StakingGrantRecord[]> {       
        return await this.getObjectsByQueryWithPagination(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query, page, limit);
    }

    async getStakeAuthzGrantsByQueryWithSort(query: any, sort: any): Promise<StakingGrantRecord[]> {
        return await this.getObjectsByQueryWithSort(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query, sort);
    }

    async getStakeAuthzGrantsByQueryWithSortAndPagination(query: any, sort: any, page: number, limit: number): Promise<StakingGrantRecord[]> {
        return await this.getObjectsByQueryWithSortAndPagination(this.STAKE_AUTHZ_GRANTS_COLLECTION_NAME, query, sort, page, limit);
    }
}