import { Type, Static } from '@sinclair/typebox';

const UpdateObjectResponse = Type.Object({
    updated: Type.Boolean(),
});

type UpdateObjectResponse = Static<typeof UpdateObjectResponse>

export { UpdateObjectResponse }