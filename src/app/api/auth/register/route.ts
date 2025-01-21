import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as z from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(4, "Username must have than 4 characters")
    .max(20, "Username must have less than 20 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function GET() {
  try {
    const getUsers = await prisma.user.findMany();
    return NextResponse.json({
      data: getUsers,
    });
  } catch (error) {
    console.error("Error fetching users: ", error);
    return NextResponse.json({
      error: "Failed to fetch users",
    });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password, email } = userSchema.parse(body);
  try {
    const isEmailExist = await prisma.user.findFirst({
      where: { email: email },
    });

    if (isEmailExist) {
      return NextResponse.json(
        {
          error: "User with this email already exists",
        },
        {
          status: 409,
        }
      );
    }

    const isUsernameExist = await prisma.user.findFirst({
      where: { username: username },
    });

    if (isUsernameExist) {
      return NextResponse.json(
        {
          error: "User with this username already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      {
        error: "Failed to create user",
      },
      {
        status: 500,
      }
    );
  }
}
