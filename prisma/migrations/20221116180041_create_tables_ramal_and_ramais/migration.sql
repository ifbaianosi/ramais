-- CreateTable
CREATE TABLE "Ramais" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "departmentId" TEXT NOT NULL,
    "ramalId" TEXT NOT NULL,
    CONSTRAINT "Ramais_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ramais_ramalId_fkey" FOREIGN KEY ("ramalId") REFERENCES "Ramal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ramal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Ramal_numero_key" ON "Ramal"("numero");
