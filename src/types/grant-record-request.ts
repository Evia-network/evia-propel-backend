import { Type, Static } from '@sinclair/typebox';

const ValidatorStakeInfo = Type.Object({
    validatorAddress: Type.String(),
    validatorName: Type.String(),
    stakePercentOfTotal: Type.Optional(Type.Number()),
})

type ValidatorStakeInfo = Static<typeof ValidatorStakeInfo>

const CreateStakingGrantRecordRequest = Type.Object({
    grantee: Type.String(),
    granter: Type.String(),
    chainId: Type.String(),
    expiration: Type.String(),
    maxAmount: Type.String(),
    chosenEpochDuration: Type.Number(),
    allowList: Type.Optional(Type.Array(ValidatorStakeInfo)),
    blockList: Type.Optional(Type.Array(ValidatorStakeInfo)),
})

type CreateStakingGrantRecordRequest = Static<typeof CreateStakingGrantRecordRequest>

const UpdateStakingGrantRecordRequest = Type.Object({
    expiration: Type.Optional(Type.String()),
    maxAmount: Type.Optional(Type.String()),
    chosenEpochDuration: Type.Optional(Type.Number()),
    allowList: Type.Optional(Type.Array(ValidatorStakeInfo)),
    blockList: Type.Optional(Type.Array(ValidatorStakeInfo)),
})

type UpdateStakingGrantRecordRequest = Static<typeof UpdateStakingGrantRecordRequest>

const CreateLPMiningGrantRecordRequest = Type.Object({
    network: Type.String(),
    grantee: Type.String(),
    granter: Type.String(),
    poolId: Type.String(),
    ticker: Type.String(),
    expiration: Type.String(),
    chosenEpochDuration: Type.Number(),
})

type CreateLPMiningGrantRecordRequest = Static<typeof CreateLPMiningGrantRecordRequest>

const UpdateLPMiningGrantRecordRequest = Type.Object({
    expiration: Type.Optional(Type.String()),
    chosenEpochDuration: Type.Optional(Type.Number()),
})

type UpdateLPMiningGrantRecordRequest = Static<typeof UpdateLPMiningGrantRecordRequest>

export { ValidatorStakeInfo, CreateStakingGrantRecordRequest, CreateLPMiningGrantRecordRequest, UpdateStakingGrantRecordRequest, UpdateLPMiningGrantRecordRequest }