/*
  Warnings:

  - A unique constraint covering the columns `[emailVerificationToken]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comment_emailVerificationToken_key" ON "Comment"("emailVerificationToken");
