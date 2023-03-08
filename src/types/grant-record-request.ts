import { Type, Static } from '@sinclair/typebox';

const ValidatorStakeInfo = Type.Object({
    validatorAddress: Type.String(),
    validatorName: Type.String(),
    stakePercentOfTotal: Type.Optional(Type.Number()),
})

type ValidatorStakeInfo = Static<typeof ValidatorStakeInfo>

const StakingGrantRecordRequest = Type.Object({
    grantee: Type.String(),
    granter: Type.String(),
    chainId: Type.String(),
    expiration: Type.Date({ format: 'date-time'}),
    maxAmount: Type.String(),
    chosenEpochDuration: Type.Number(),
    allowList: Type.Optional(Type.Array(ValidatorStakeInfo)),
    blockList: Type.Optional(Type.Array(ValidatorStakeInfo)),
})

type StakingGrantRecordRequest = Static<typeof StakingGrantRecordRequest>

const LPMiningGrantRecordRequest = Type.Object({
    network: Type.String(),
    grantee: Type.String(),
    granter: Type.String(),
    poolId: Type.String(),
    ticker: Type.String(),
    expiration: Type.Date({ format: 'date-time'}),
    chosenEpochDuration: Type.Number(),
})

type LPMiningGrantRecordRequest = Static<typeof LPMiningGrantRecordRequest>

export { ValidatorStakeInfo, StakingGrantRecordRequest, LPMiningGrantRecordRequest }