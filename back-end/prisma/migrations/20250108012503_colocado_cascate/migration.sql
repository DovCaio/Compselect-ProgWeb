/*
  Warnings:

  - You are about to drop the column `contry` on the `Location` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Publication` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_eventId_fkey";

-- DropIndex
DROP INDEX "Post_titles_key";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "contry",
ADD COLUMN     "country" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_email_key" ON "Comment"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Publication_title_key" ON "Publication"("title");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
