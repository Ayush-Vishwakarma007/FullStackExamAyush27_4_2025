const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createReport = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const report = await prisma.report.create({
      data: {
        title,
        content,
        userId,
      },
    });

    res.status(201).json(report);
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ error: 'Failed to create report' });
  }
};

exports.getReports = async (req, res) => {
  try {
    const userId = req.user.id;

    const reports = await prisma.report.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json(reports);
  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({ error: 'Failed to fetch reports' });
  }
};
