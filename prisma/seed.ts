import { employees } from './seeds/employees';
import { PrismaClient } from '@prisma/client'
import { departments } from './seeds/departments';
import { ramais } from './seeds/ramais';
const prisma = new PrismaClient()

async function main() {
  employees.forEach(async (employee) => {
      await prisma.employee.create({
          data: {
              name: employee.name,
            },
      })
  })

  departments.forEach(async (department) => {
    await prisma.department.create({
      data: {
        name: department.name,
        initials: department.sigla,
      }
    })
  })

  // ramais.forEach(async (ramal) => {
  //   await prisma.ramal.create({
  //     data: {
  //       numero: ramal.numero,
  //     }
  //   })
  // })

   
}

async function main2() {
  ramais.forEach(async (ramal) => {
    await prisma.ramal.create({
      data: {
        numero: ramal.numero,
      }
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  main2()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })