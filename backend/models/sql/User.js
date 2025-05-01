const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (email, password) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password, 
      },
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};


const getUserById = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user");
  }
};


const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Error fetching user");
  }
};

module.exports = { createUser, getUserById, getUserByEmail };
