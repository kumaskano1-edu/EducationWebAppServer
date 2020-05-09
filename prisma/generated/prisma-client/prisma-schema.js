module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateSubject {
  count: Int!
}

type AggregateTodo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createSubject(data: SubjectCreateInput!): Subject!
  updateSubject(data: SubjectUpdateInput!, where: SubjectWhereUniqueInput!): Subject
  updateManySubjects(data: SubjectUpdateManyMutationInput!, where: SubjectWhereInput): BatchPayload!
  upsertSubject(where: SubjectWhereUniqueInput!, create: SubjectCreateInput!, update: SubjectUpdateInput!): Subject!
  deleteSubject(where: SubjectWhereUniqueInput!): Subject
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  subject(where: SubjectWhereUniqueInput!): Subject
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subject {
  id: ID!
  title: String!
  professor: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type SubjectConnection {
  pageInfo: PageInfo!
  edges: [SubjectEdge]!
  aggregate: AggregateSubject!
}

input SubjectCreateInput {
  id: ID
  title: String!
  professor: String!
  users: UserCreateManyWithoutSubjectsInput
}

input SubjectCreateManyWithoutUsersInput {
  create: [SubjectCreateWithoutUsersInput!]
  connect: [SubjectWhereUniqueInput!]
}

input SubjectCreateOneInput {
  create: SubjectCreateInput
  connect: SubjectWhereUniqueInput
}

input SubjectCreateWithoutUsersInput {
  id: ID
  title: String!
  professor: String!
}

type SubjectEdge {
  node: Subject!
  cursor: String!
}

enum SubjectOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  professor_ASC
  professor_DESC
}

type SubjectPreviousValues {
  id: ID!
  title: String!
  professor: String!
}

input SubjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  professor: String
  professor_not: String
  professor_in: [String!]
  professor_not_in: [String!]
  professor_lt: String
  professor_lte: String
  professor_gt: String
  professor_gte: String
  professor_contains: String
  professor_not_contains: String
  professor_starts_with: String
  professor_not_starts_with: String
  professor_ends_with: String
  professor_not_ends_with: String
  AND: [SubjectScalarWhereInput!]
  OR: [SubjectScalarWhereInput!]
  NOT: [SubjectScalarWhereInput!]
}

type SubjectSubscriptionPayload {
  mutation: MutationType!
  node: Subject
  updatedFields: [String!]
  previousValues: SubjectPreviousValues
}

input SubjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubjectWhereInput
  AND: [SubjectSubscriptionWhereInput!]
  OR: [SubjectSubscriptionWhereInput!]
  NOT: [SubjectSubscriptionWhereInput!]
}

input SubjectUpdateDataInput {
  title: String
  professor: String
  users: UserUpdateManyWithoutSubjectsInput
}

input SubjectUpdateInput {
  title: String
  professor: String
  users: UserUpdateManyWithoutSubjectsInput
}

input SubjectUpdateManyDataInput {
  title: String
  professor: String
}

input SubjectUpdateManyMutationInput {
  title: String
  professor: String
}

input SubjectUpdateManyWithoutUsersInput {
  create: [SubjectCreateWithoutUsersInput!]
  delete: [SubjectWhereUniqueInput!]
  connect: [SubjectWhereUniqueInput!]
  set: [SubjectWhereUniqueInput!]
  disconnect: [SubjectWhereUniqueInput!]
  update: [SubjectUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [SubjectUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [SubjectScalarWhereInput!]
  updateMany: [SubjectUpdateManyWithWhereNestedInput!]
}

input SubjectUpdateManyWithWhereNestedInput {
  where: SubjectScalarWhereInput!
  data: SubjectUpdateManyDataInput!
}

input SubjectUpdateOneRequiredInput {
  create: SubjectCreateInput
  update: SubjectUpdateDataInput
  upsert: SubjectUpsertNestedInput
  connect: SubjectWhereUniqueInput
}

input SubjectUpdateWithoutUsersDataInput {
  title: String
  professor: String
}

input SubjectUpdateWithWhereUniqueWithoutUsersInput {
  where: SubjectWhereUniqueInput!
  data: SubjectUpdateWithoutUsersDataInput!
}

input SubjectUpsertNestedInput {
  update: SubjectUpdateDataInput!
  create: SubjectCreateInput!
}

input SubjectUpsertWithWhereUniqueWithoutUsersInput {
  where: SubjectWhereUniqueInput!
  update: SubjectUpdateWithoutUsersDataInput!
  create: SubjectCreateWithoutUsersInput!
}

input SubjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  professor: String
  professor_not: String
  professor_in: [String!]
  professor_not_in: [String!]
  professor_lt: String
  professor_lte: String
  professor_gt: String
  professor_gte: String
  professor_contains: String
  professor_not_contains: String
  professor_starts_with: String
  professor_not_starts_with: String
  professor_ends_with: String
  professor_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [SubjectWhereInput!]
  OR: [SubjectWhereInput!]
  NOT: [SubjectWhereInput!]
}

input SubjectWhereUniqueInput {
  id: ID
  title: String
}

type Subscription {
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo {
  id: ID!
  title: String!
  description: String!
  dueDate: String!
  user: User!
  subject: Subject!
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  id: ID
  title: String!
  description: String!
  dueDate: String!
  user: UserCreateOneWithoutTodosInput!
  subject: SubjectCreateOneInput!
}

input TodoCreateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutUserInput {
  id: ID
  title: String!
  description: String!
  dueDate: String!
  subject: SubjectCreateOneInput!
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  dueDate_ASC
  dueDate_DESC
}

type TodoPreviousValues {
  id: ID!
  title: String!
  description: String!
  dueDate: String!
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueDate: String
  dueDate_not: String
  dueDate_in: [String!]
  dueDate_not_in: [String!]
  dueDate_lt: String
  dueDate_lte: String
  dueDate_gt: String
  dueDate_gte: String
  dueDate_contains: String
  dueDate_not_contains: String
  dueDate_starts_with: String
  dueDate_not_starts_with: String
  dueDate_ends_with: String
  dueDate_not_ends_with: String
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  title: String
  description: String
  dueDate: String
  user: UserUpdateOneRequiredWithoutTodosInput
  subject: SubjectUpdateOneRequiredInput
}

input TodoUpdateManyDataInput {
  title: String
  description: String
  dueDate: String
}

input TodoUpdateManyMutationInput {
  title: String
  description: String
  dueDate: String
}

input TodoUpdateManyWithoutUserInput {
  create: [TodoCreateWithoutUserInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutUserDataInput {
  title: String
  description: String
  dueDate: String
  subject: SubjectUpdateOneRequiredInput
}

input TodoUpdateWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutUserDataInput!
}

input TodoUpsertWithWhereUniqueWithoutUserInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutUserDataInput!
  create: TodoCreateWithoutUserInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  dueDate: String
  dueDate_not: String
  dueDate_in: [String!]
  dueDate_not_in: [String!]
  dueDate_lt: String
  dueDate_lte: String
  dueDate_gt: String
  dueDate_gte: String
  dueDate_contains: String
  dueDate_not_contains: String
  dueDate_starts_with: String
  dueDate_not_starts_with: String
  dueDate_ends_with: String
  dueDate_not_ends_with: String
  user: UserWhereInput
  subject: SubjectWhereInput
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  name: String!
  password: String!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  name: String!
  password: String!
  subjects: SubjectCreateManyWithoutUsersInput
  todos: TodoCreateManyWithoutUserInput
}

input UserCreateManyWithoutSubjectsInput {
  create: [UserCreateWithoutSubjectsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSubjectsInput {
  id: ID
  email: String!
  name: String!
  password: String!
  todos: TodoCreateManyWithoutUserInput
}

input UserCreateWithoutTodosInput {
  id: ID
  email: String!
  name: String!
  password: String!
  subjects: SubjectCreateManyWithoutUsersInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  password: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  subjects: SubjectUpdateManyWithoutUsersInput
  todos: TodoUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  email: String
  name: String
  password: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
}

input UserUpdateManyWithoutSubjectsInput {
  create: [UserCreateWithoutSubjectsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSubjectsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSubjectsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSubjectsDataInput {
  email: String
  name: String
  password: String
  todos: TodoUpdateManyWithoutUserInput
}

input UserUpdateWithoutTodosDataInput {
  email: String
  name: String
  password: String
  subjects: SubjectUpdateManyWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutSubjectsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSubjectsDataInput!
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserUpsertWithWhereUniqueWithoutSubjectsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSubjectsDataInput!
  create: UserCreateWithoutSubjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  subjects_every: SubjectWhereInput
  subjects_some: SubjectWhereInput
  subjects_none: SubjectWhereInput
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    