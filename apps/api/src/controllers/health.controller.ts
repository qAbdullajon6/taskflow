import { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js';

export const getHealthStatus = async (req: Request, res: Response) => {
    await prisma.$queryRaw`SELECT 1`;

    const healthData = {
        status: 'ok',
        database: 'Connected 🟢',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        enivoronment: process.env.NODE_ENV || 'development'
    }
    try {
        res.status(200).json(healthData)
    } catch (error) {
        res.status(503).json({
            status: 'ERROR',
            message: "Server sog'lig'ida muammo bor"
        })
    }
}