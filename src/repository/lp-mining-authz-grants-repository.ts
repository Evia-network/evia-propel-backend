import { Document, InsertOneResult, UpdateResult, DeleteResult } from "mongodb";
import { LPMiningGrantRecord } from "../schema/grant-record-schema";
import { CreateLPMiningGrantRecordRequest, UpdateLPMiningGrantRecordRequest } from "../types/grant-record-request";
import { BaseRepository } from "./base-repository";

export class LPMiningAuthzGrantsRepository extends BaseRepository {
    LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME = 'lp_mining_authz_grants';

    async getLPMiningAuthzGrantsCount(): Promise<number> {
        return this.countObjects(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async getLPMiningAuthzGrantsCountByGranter(granter: string): Promise<number> {
        return this.countObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getLPMiningAuthzGrantsCountByGrantee(grantee: string): Promise<number> {
        return this.countObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getLPMiningAuthzGrantsByGranter(granter: string): Promise<LPMiningGrantRecord[]> {
        return this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { granter: granter });
    }

    async getLPMiningAuthzGrantsByGrantee(grantee: string): Promise<LPMiningGrantRecord[]> {
        return this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, { grantee: grantee });
    }

    async getLPMiningAuthzGrantByQuery(query: any): Promise<LPMiningGrantRecord> {
        return this.getObjectByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getLPMiningAuthzGrantById(id: string): Promise<LPMiningGrantRecord> {
        return this.getObjectById(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async insertLPMiningAuthzGrant(lpMiningAuthzGrantRequest: CreateLPMiningGrantRecordRequest): Promise<InsertOneResult> {
        return this.insertObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, lpMiningAuthzGrantRequest);
    }

    async updateLPMiningAuthzGrant(id: string, lpMiningAuthzGrantRequest: UpdateLPMiningGrantRecordRequest): Promise<UpdateResult> { 
        return this.updateObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id, { ...lpMiningAuthzGrantRequest});
    }

    async deleteLPMiningAuthzGrant(id: string): Promise<DeleteResult> {
        return this.deleteObject(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, id);
    }

    async deleteLPMiningAuthzGrantsByQuery(query: any): Promise<DeleteResult> {
        return this.deleteObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async deleteAllLPMiningAuthzGrants(): Promise<DeleteResult> {
        return this.deleteAllObjects(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME);
    }

    async updateLPMiningAuthzGrantsByQuery(query: any, lpMiningAuthzGrantRequest: CreateLPMiningGrantRecordRequest): Promise<Document | UpdateResult> {
        return this.updateObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, lpMiningAuthzGrantRequest);
    }

    async getLPMiningAuthzGrantsByQuery(query: any): Promise<LPMiningGrantRecord[]> {
        return this.getObjectsByQuery(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query);
    }

    async getLPMiningAuthzGrantsByQueryWithPagination(query: any, page: number, limit: number): Promise<LPMiningGrantRecord[]> {       
        return this.getObjectsByQueryWithPagination(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, page, limit);
    }

    async getLPMiningAuthzGrantsByQueryWithSort(query: any, sort: any): Promise<LPMiningGrantRecord[]> {
        return this.getObjectsByQueryWithSort(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, sort);
    }

    async getLPMiningAuthzGrantsByQueryWithSortAndPagination(query: any, sort: any, page: number, limit: number): Promise<LPMiningGrantRecord[]> {
        return this.getObjectsByQueryWithSortAndPagination(this.LP_MINING_AUTHZ_GRANTS_COLLECTION_NAME, query, sort, page, limit);
    }
}