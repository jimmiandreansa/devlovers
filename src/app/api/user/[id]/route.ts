import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params} : {params: {id: string}}) {
  const { id } = params

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!getUser) {
      return NextResponse.json({
        error: 'User not found'
      }, {
        status: 404
      });
    }
    
    return NextResponse.json({
      data: getUser
    })
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({
      error: 'Failed to fetch user'
    })
  }
}

export async function PUT(request: NextRequest, {params} : {params: {id: string}}) {
  const { id } = params
  const { username, email, password } = await request.json();

  try {
    const updateUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        username,
        email,
        password
      }
    })

    if (!updateUser) {
      return NextResponse.json({
        error: 'User not found'
      }, {
        status: 404
      });
    }

    return NextResponse.json({
      updateUser,
      message: 'User updated successfully'
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({
      error: 'Failed to update user'
    })
  }
}

export async function DELETE(request: NextRequest, {params} : {params: {id: string}}) {
  const { id } = params

  try {
    const deleteUser = await prisma.user.delete({
        where: {
          id: id
        }
    })

    return NextResponse.json({
        message: `User with id ${id} deleted successfully`
    })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({
      error: 'Failed to delete user'
    })
  }
}