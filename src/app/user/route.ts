import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

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
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password
      }
    })
    return NextResponse.json({
      data: newUser,
      message: 'User created successfully'
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({
      error: 'Failed to create user'
    }
  )}
}