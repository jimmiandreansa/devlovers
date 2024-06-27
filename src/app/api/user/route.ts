import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const getUsers = await prisma.user.findMany()
    return NextResponse.json({
      data: getUsers
    })
  } catch (error) {
    console.error('Error fetching users: ', error)
    return NextResponse.json({
      error: 'Failed to fetch users'
    }
  )}
}

export async function POST(request: NextRequest) {
  const { username, password, email } = await request.json()
  try {
    const isExist = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      }
    })

    if (isExist) {
      return NextResponse.json({
        error: 'username or email already exists'
      }, {
        status: 409
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    })
    return NextResponse.json({
      data: newUser,
      message: 'User created successfully'
    }, {
      status: 201
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({
      error: 'Failed to create user'
    }, {
      status: 500
    }
  )}
}