// Code generated by Prisma (prisma@1.27.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  recipe: (where?: RecipeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  recipe: (where: RecipeWhereUniqueInput) => RecipePromise;
  recipes: (
    args?: {
      where?: RecipeWhereInput;
      orderBy?: RecipeOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Recipe>;
  recipesConnection: (
    args?: {
      where?: RecipeWhereInput;
      orderBy?: RecipeOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RecipeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRecipe: (data: RecipeCreateInput) => RecipePromise;
  updateRecipe: (
    args: { data: RecipeUpdateInput; where: RecipeWhereUniqueInput }
  ) => RecipePromise;
  updateManyRecipes: (
    args: { data: RecipeUpdateManyMutationInput; where?: RecipeWhereInput }
  ) => BatchPayloadPromise;
  upsertRecipe: (
    args: {
      where: RecipeWhereUniqueInput;
      create: RecipeCreateInput;
      update: RecipeUpdateInput;
    }
  ) => RecipePromise;
  deleteRecipe: (where: RecipeWhereUniqueInput) => RecipePromise;
  deleteManyRecipes: (where?: RecipeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  recipe: (
    where?: RecipeSubscriptionWhereInput
  ) => RecipeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RecipeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "ingredients_ASC"
  | "ingredients_DESC"
  | "directions_ASC"
  | "directions_DESC"
  | "published_ASC"
  | "published_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type RecipeWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  title?: String;
}>;

export interface RecipeWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  ingredients?: String;
  ingredients_not?: String;
  ingredients_in?: String[] | String;
  ingredients_not_in?: String[] | String;
  ingredients_lt?: String;
  ingredients_lte?: String;
  ingredients_gt?: String;
  ingredients_gte?: String;
  ingredients_contains?: String;
  ingredients_not_contains?: String;
  ingredients_starts_with?: String;
  ingredients_not_starts_with?: String;
  ingredients_ends_with?: String;
  ingredients_not_ends_with?: String;
  directions?: String;
  directions_not?: String;
  directions_in?: String[] | String;
  directions_not_in?: String[] | String;
  directions_lt?: String;
  directions_lte?: String;
  directions_gt?: String;
  directions_gte?: String;
  directions_contains?: String;
  directions_not_contains?: String;
  directions_starts_with?: String;
  directions_not_starts_with?: String;
  directions_ends_with?: String;
  directions_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  AND?: RecipeWhereInput[] | RecipeWhereInput;
  OR?: RecipeWhereInput[] | RecipeWhereInput;
  NOT?: RecipeWhereInput[] | RecipeWhereInput;
}

export interface RecipeCreateInput {
  title: String;
  ingredients: String;
  directions: String;
  published?: Boolean;
}

export interface RecipeUpdateInput {
  title?: String;
  ingredients?: String;
  directions?: String;
  published?: Boolean;
}

export interface RecipeUpdateManyMutationInput {
  title?: String;
  ingredients?: String;
  directions?: String;
  published?: Boolean;
}

export interface RecipeSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RecipeWhereInput;
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput;
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput;
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Recipe {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  title: String;
  ingredients: String;
  directions: String;
  published: Boolean;
}

export interface RecipePromise extends Promise<Recipe>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  ingredients: () => Promise<String>;
  directions: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface RecipeSubscription
  extends Promise<AsyncIterator<Recipe>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  ingredients: () => Promise<AsyncIterator<String>>;
  directions: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface RecipeConnection {
  pageInfo: PageInfo;
  edges: RecipeEdge[];
}

export interface RecipeConnectionPromise
  extends Promise<RecipeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecipeEdge>>() => T;
  aggregate: <T = AggregateRecipePromise>() => T;
}

export interface RecipeConnectionSubscription
  extends Promise<AsyncIterator<RecipeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecipeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecipeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RecipeEdge {
  node: Recipe;
  cursor: String;
}

export interface RecipeEdgePromise extends Promise<RecipeEdge>, Fragmentable {
  node: <T = RecipePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecipeEdgeSubscription
  extends Promise<AsyncIterator<RecipeEdge>>,
    Fragmentable {
  node: <T = RecipeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRecipe {
  count: Int;
}

export interface AggregateRecipePromise
  extends Promise<AggregateRecipe>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecipeSubscription
  extends Promise<AsyncIterator<AggregateRecipe>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType;
  node: Recipe;
  updatedFields: String[];
  previousValues: RecipePreviousValues;
}

export interface RecipeSubscriptionPayloadPromise
  extends Promise<RecipeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecipePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecipePreviousValuesPromise>() => T;
}

export interface RecipeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecipeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecipeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecipePreviousValuesSubscription>() => T;
}

export interface RecipePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  title: String;
  ingredients: String;
  directions: String;
  published: Boolean;
}

export interface RecipePreviousValuesPromise
  extends Promise<RecipePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  ingredients: () => Promise<String>;
  directions: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface RecipePreviousValuesSubscription
  extends Promise<AsyncIterator<RecipePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  ingredients: () => Promise<AsyncIterator<String>>;
  directions: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Recipe",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
