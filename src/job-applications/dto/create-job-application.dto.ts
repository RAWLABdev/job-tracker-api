import { IsEnum, IsOptional, IsString } from 'class-validator';

import { JobSource, JobStatus } from '@prisma/client';

export class CreateJobApplicationDto {
  @IsString()
  company: string;

  @IsString()
  position: string;

  @IsOptional()
  @IsEnum(JobSource)
  source?: JobSource;

  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;

  @IsOptional()
  @IsString()
  salaryRange?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
