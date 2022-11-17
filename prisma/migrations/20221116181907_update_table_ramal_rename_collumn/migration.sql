/*
  Warnings:

  - A unique constraint covering the columns `[departmentId,ramalId]` on the table `Ramais` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ramais_departmentId_ramalId_key" ON "Ramais"("departmentId", "ramalId");
