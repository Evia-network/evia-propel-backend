import { LPMiningGrantRecord } from "../schema/grant-record-schema";
import { LPMiningGrantRecordRequest } from "../types/grant-record-request";
import { BaseRepository } from "./base-repository";

export class LPMiningAuthzGrantsRepository extends BaseRepository {
    LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME = 'lp_mining_authz_grants';

    async getLPMiningAuthzGrantsCount(): Promise<number> {
        return await this.countObjects(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async getLPMiningAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return await this.countObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getLPMiningAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return await this.countObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getLPMiningAuthzGrantsByGranter(granter: string): Promise<LPMiningGrantRecord[]> {
        return await this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getLPMiningAuthzGrantsByGrantee(grantee: string): Promise<LPMiningGrantRecord[]> {
        return await this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getLPMiningAuthzGrantByQuery(query: any): Promise<LPMiningGrantRecord> {
        return await this.getObjectByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getLPMiningAuthzGrantById(id: string): Promise<LPMiningGrantRecord> {
        return await this.getObjectById(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async insertLPMiningAuthzGrant(stakeAuthzGrantRequest: LPMiningGrantRecordRequest): Promise<LPMiningGrantRecord> {
        return await this.insertObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, stakeAuthzGrantRequest);
    }

    async updateLPMiningAuthzGrant(id: string, stakeAuthzGrantRequest: LPMiningGrantRecordRequest): Promise<LPMiningGrantRecord> {
        return await this.updateObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id, stakeAuthzGrantRequest);
    }

    async deleteLPMiningAuthzGrant(id: string): Promise<LPMiningGrantRecord> {
        return await this.deleteObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async deleteLPMiningAuthzGrantsByQuery(query: any): Promise<LPMiningGrantRecord> {
        return await this.deleteObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async deleteAllLPMiningAuthzGrants(): Promise<LPMiningGrantRecord> {
        return await this.deleteAllObjects(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async updateLPMiningAuthzGrantsByQuery(query: any, stakeAuthzGrantRequest: LPMiningGrantRecordRequest): Promise<LPMiningGrantRecord> {
        return await this.updateObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, stakeAuthzGrantRequest);
    }

    async getLPMiningAuthzGrantsByQuery(query: any): Promise<LPMiningGrantRecord[]> {
        return await this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getLPMiningAuthzGrantsByQueryWithPagination(query: any, page: number, limit: number): Promise<LPMiningGrantRecord[]> {       
        return await this.getObjectsByQueryWithPagination(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, page, limit);
    }

    async getLPMiningAuthzGrantsByQueryWithSort(query: any, sort: any): Promise<LPMiningGrantRecord[]> {
        return await this.getObjectsByQueryWithSort(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, sort);
    }

    async getLPMiningAuthzGrantsByQueryWithSortAndPagination(query: any, sort: any, page: number, limit: number): Promise<LPMiningGrantRecord[]> {
        return await this.getObjectsByQueryWithSortAndPagination(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, sort, page, limit);
    }
}