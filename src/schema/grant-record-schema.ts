import { Static, Type } from '@sinclair/typebox'

const ValidatorStakeInfo = Type.Object({
    validatorAddress: Type.String(),
    validatorName: Type.String(),
    stakePercentOfTotal: Type.Optional(Type.Number()),
})

type ValidatorStakeInfo = Static<typeof ValidatorStakeInfo>

const StakingGrantRecord = Type.Object({
    _id: Type.Optional(Type.String()),
    grantee: Type.String(),
    granter: Type.String(),
    chainId: Type.String(),
    expiration: Type.String(),
    maxAmount: Type.String(),
    chosenEpochDuration: Type.Number(),
    allowList: Type.Optional(Type.Array(ValidatorStakeInfo)),
    blockList: Type.Optional(Type.Array(ValidatorStakeInfo)),
    created: Type.String(),
    updated: Type.String(),
})

type StakingGrantRecord = Static<typeof StakingGrantRecord>

const LPMiningGrantRecord = Type.Object({
    _id: Type.Optional(Type.String()),
    network: Type.String(),
    grantee: Type.String(),
    granter: Type.String(),
    poolId: Type.String(),
    ticker: Type.String(),
    expiration: Type.String(),
    chosenEpochDuration: Type.Number(),
    created: Type.String(),
    updated: Type.String(),
})

type LPMiningGrantRecord = Static<typeof LPMiningGrantRecord>

export { ValidatorStakeInfo, StakingGrantRecord, LPMiningGrantRecord }
