const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrder = async (userId, amount, status) => {
  try {
    const newOrder = await prisma.order.create({
      data: {
        userId,
        amount,
        status,
      },
    });
    return newOrder;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Error creating order");
  }
};

const getOrdersByUser = async (userId) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId },
    });
    return orders;
  } catch (error) {
    console.error("Error fetching orders by user:", error);
    throw new Error("Error fetching orders");
  }
};

module.exports = { createOrder, getOrdersByUser };
