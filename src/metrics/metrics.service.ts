import { Injectable } from '@nestjs/common';
import { JobStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MetricsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary() {
    const [total, applied, interview, technical, offer, rejected] =
      await Promise.all([
        this.prisma.jobApplication.count(),
        this.prisma.jobApplication.count({ where: { status: JobStatus.APPLIED } }),
        this.prisma.jobApplication.count({ where: { status: JobStatus.INTERVIEW } }),
        this.prisma.jobApplication.count({ where: { status: JobStatus.TECHNICAL } }),
        this.prisma.jobApplication.count({ where: { status: JobStatus.OFFER } }),
        this.prisma.jobApplication.count({ where: { status: JobStatus.REJECTED } }),
      ]);

    return {
      total,
      applied,
      interview,
      technical,
      offer,
      rejected,
    };
  }
}
