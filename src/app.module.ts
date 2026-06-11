import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { JobApplicationsModule } from './job-applications/job-applications.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [PrismaModule, JobApplicationsModule, MetricsModule],
})
export class AppModule {}
