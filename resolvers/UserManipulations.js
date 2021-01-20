const isTokenValid = require('../authentication/validate');


module.exports = {
  Mutation: {
    changeEmail: (parent, { Email, userId }, context) => {
      const {token} = await context();
      const {error} = await isTokenValid(token);
      if (error) {
        throw new Error(error);
      }
      return context.prisma.updateUser({
        data: {
          email: Email,
        },
        where: {
          id: userId,
        },
      });
    },
    changeName: (parent, { name, userId }, context) => {
      return context.prisma.updateUser({
        data: {
          name: name,
        },
        where: {
          id: userId,
        },
      });
    },
    changePassword: (parent, { userId, newPassword }, context) => {
      return context.prisma.updateUser({
        data: {
          password: newPassword,
        },
        where: {
          id: userId,
        },
      });
    },
    async removeTodoforUser(parent, { id, TodoId }, context) {
      return context.prisma.updateUser({
        where: { id },
        data: {
          todos: {
            delete: {
              TodoId: TodoId,
            },
          },
        },
      });
    },
    async addSubjectforUser(parent, { userId, SubjectId }, context) {
      const subject = await context.prisma.$exists.subject({ SubjectId });
      if (!subject) {
        const subject = await context.prisma.createSubject({
          title: "Kuma",
          professor: "Gelo",
          users: {
            connect: {
              id: userId,
            },
          },
        });
        return context.prisma.user({ id: userId });
      }
      return context.prisma.updateUser({
        where: { id: userId },
        data: {
          subjects: {
            connect: {
              SubjectId: SubjectId,
            },
          },
        },
      });
    },
    removeSubjectforUser: (parent, { userId, SubjectId }, context) => {
      return context.prisma.updateUser({
        where: { id: userId },
        data: {
          subjects: {
            disconnect: {
              SubjectId,
            },
          },
        },
      });
    },
    async changeSubjectforUser(
      parent,
      { UserId, SubjectId, SubjectTittle },
      context
    ) {
      //creates a new subject if does not exist
      //changes all todos subjects to the one that exists
      const Subject = await context.prisma.subject({ title: SubjectTittle });
      if (Subject) {
        return context.prisma.updateUser({
          where: {
            id: UserId,
          },
          data: {
            subjects: {
              connect: {
                SubjectId: Subject.SubjectId,
              },
              disconnect: {
                SubjectId: SubjectId,
              },
            },
          },
        });
      }
      return context.prisma.updateUser({
        where: {
          id: UserId,
        },
        data: {
          subjects: {
            create: {
              title: "Test1",
              professor: "Test2",
            },
            disconnect: {
              SubjectId,
            },
          },
        },
      });
    },
    addTodoforUser: (parent, { userId, SubjectId }, context) => {
      return context.prisma.createTodo({
        title: "Kurmanbek",
        description: "MOtherFucjer",
        dueDate: "12/12/2012",
        subject: {
          connect: {
            SubjectId: SubjectId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      });
    },
    changeDueDate: (parent, { UserId, TodoId, newDate }, context) => {
      return context.prisma.updateUser({
        where: { id: UserId },
        data: {
          todos: {
            update: {
              where: {
                TodoId: TodoId,
              },
              data: {
                dueDate: newDate,
              },
            },
          },
        },
      });
    },
  },
  Query: {
    getUsers: (parent, args, context) => {
      return context.prisma.users();
    },
    getUser: (parent, { id }, context) => {
      return context.prisma.user({ id });
    },
    getSubjectsUser: (parent, { id }, context) => {
      return context.prisma.user({ id });
    },
  },
  User: {
    todos: ({ id }, args, context) => {
      return context.prisma.user({ id }).todos();
    },
    subjects: ({ id }, args, context) => {
      return context.prisma.user({ id }).subjects();
    },
  },
  Subject: {
    users: ({ SubjectId }, args, context) => {
      return context.prisma.subject({ SubjectId }).users();
    },
  },
  Todo: {
    user: ({ TodoId }, args, context) => {
      return context.prisma.todo({ TodoId }).user();
    },
    subject: ({ TodoId }, args, context) => {
      return context.prisma.todo({ TodoId }).subject();
    },
  },
};
