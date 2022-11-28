// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../database/prisma'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ramais = await prisma.ramais.findMany({ 
    distinct: ["departmentId"],
    include: { 
      ramal: {
        select: {
          id: true,
          numero: true
        }
      },

      departament: {
        select: {
          id: true,
          name: true,
          initials: true,

          employees: {
            select: {
              id: true,
              name: true
            }
          },

          ramais: {
            select: {
              ramal: {
                select: {
                  numero: true
                }
              }
            }
          }
        }
      }
    }
  })

  console.log(ramais[0].departament.ramais[0])

  return res.status(200).json(ramais)
}
