
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Donation: a
    .model({
      foodName: a.string().required(),
      quantity: a.string().required(),
      foodType: a.string().required(),
      pickupLocation: a.string().required(),
      pickupTime: a.string().required(),
      notes: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(["create", "read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
