import { Type, Static } from '@sinclair/typebox';

const PropelStatsResponse = Type.Object({
    stakeGrantsCount: Type.Number(),
    lpMiningGrantsCount: Type.Number(),
});

type PropelStatsResponse = Static<typeof PropelStatsResponse>

export { PropelStatsResponse }
