import { Injectable, NotFoundException } from '@nestjs/common';
import { JobApplication } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobApplicationDto } from './dto/create-job-application.dto';
import { UpdateJobApplicationDto } from './dto/update-job-application.dto';

@Injectable()
export class JobApplicationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateJobApplicationDto): Promise<JobApplication> {
    return this.prisma.jobApplication.create({ data });
  }

  async findAll(): Promise<JobApplication[]> {
    return this.prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<JobApplication> {
    const job = await this.prisma.jobApplication.findUnique({
      where: { id },
    });

    if (!job) {
      throw new NotFoundException(`Job application with id ${id} not found`);
    }

    return job;
  }

  async update(id: string, data: UpdateJobApplicationDto): Promise<JobApplication> {
    await this.findOne(id);

    return this.prisma.jobApplication.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<JobApplication> {
    await this.findOne(id);

    return this.prisma.jobApplication.delete({
      where: { id },
    });
  }
}
