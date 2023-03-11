import { FastifyInstance } from "fastify";
import { PropelStatsResponse } from "../types/propel-stats-response";
import { LPMiningAuthzGrantsService } from "./lp-mining-authz-grants-service";
import { StakeAuthzGrantsService } from "./stake-authz-grants-service";


export class PropelService {
    private readonly stakeAuthzGrantsService: StakeAuthzGrantsService;
    private readonly lpMiningAuthzGrantsService: LPMiningAuthzGrantsService;

    constructor(fastify: FastifyInstance) {
        this.stakeAuthzGrantsService = new StakeAuthzGrantsService(fastify);
        this.lpMiningAuthzGrantsService = new LPMiningAuthzGrantsService(fastify);
    }

    async getPropelStats(): Promise<PropelStatsResponse> {
        let stakeGrantsCount, lpMiningGrantsCount;
        [stakeGrantsCount, lpMiningGrantsCount] = await Promise.all([
            this.stakeAuthzGrantsService.getStakeAuthzGrantsCount(),
            this.lpMiningAuthzGrantsService.getLPMiningAuthzGrantsCount()
        ]);
        const propelStatsResponse: PropelStatsResponse = {
            stakeGrantsCount: stakeGrantsCount,
            lpMiningGrantsCount: lpMiningGrantsCount,
        };

        return propelStatsResponse;
    }
}