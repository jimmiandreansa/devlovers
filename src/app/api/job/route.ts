import { PrismaClient, JobType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const prisma = new PrismaClient();

const jobSchema = z.object({
  title: z.string(),
  description: z.string(),
  location: z.string(),
  salary: z.string(),
  type: z.nativeEnum(JobType),
  contact: z.number(),
  company: z.string(),
});

// GET all jobs
export async function GET() {
  try {
    const getJobs = await prisma.job.findMany();
    return NextResponse.json({
      data: getJobs,
    });
  } catch (error) {
    console.error("Error fetching jobs: ", error);
    return NextResponse.json({
      error: "Failed to fetch jobs",
    });
  }
}

// POST a new job
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description, location, salary, type, contact, company } =
    jobSchema.parse(body);

  try {
    const isJobExist = await prisma.job.findFirst({
      where: { title },
    });

    if (isJobExist) {
      return NextResponse.json(
        {
          error: "Job with this title already exists",
        },
        {
          status: 409,
        }
      );
    }

    const job = await prisma.job.create({
      data: {
        title,
        description,
        location,
        salary: parseFloat(salary),
        type,
        // contact,
        company,
      },
    });
    return NextResponse.json({
      data: job,
    });
  } catch (error) {
    console.error("Error creating job: ", error);
    return NextResponse.json({
      error: "Failed to create job",
    });
  }
}

// PUT (Update) a job by ID
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, title, description, location, salary, type, contact, company } =
    jobSchema
      .extend({
        id: z.string(),
      })
      .parse(body);

  try {
    const job = await prisma.job.update({
      where: { id },
      data: {
        title,
        description,
        location,
        salary: parseFloat(salary),
        type,
        // contact,
        company,
      },
    });
    return NextResponse.json({
      data: job,
    });
  } catch (error) {
    console.error("Error updating job: ", error);
    return NextResponse.json({
      error: "Failed to update job",
    });
  }
}

// DELETE a job by ID
export async function DELETE(request: NextRequest) {
  const { id } = z
    .object({
      id: z.string(),
    })
    .parse(await request.json());

  try {
    await prisma.job.delete({
      where: { id },
    });
    return NextResponse.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job: ", error);
    return NextResponse.json({
      error: "Failed to delete job",
    });
  }
}
