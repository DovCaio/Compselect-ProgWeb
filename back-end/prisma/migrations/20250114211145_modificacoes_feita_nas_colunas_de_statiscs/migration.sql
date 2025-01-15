/*
  Warnings:

  - You are about to drop the column `qttCreateAuthors` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `qttCreateEvents` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `qttCreatePost` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `qttCreatePublications` on the `Statistics` table. All the data in the column will be lost.
  - The `qttVisitors` column on the `Statistics` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Statistics" DROP COLUMN "qttCreateAuthors",
DROP COLUMN "qttCreateEvents",
DROP COLUMN "qttCreatePost",
DROP COLUMN "qttCreatePublications",
ADD COLUMN     "qttSecondsAuthorsPage" INTEGER[],
ADD COLUMN     "qttSecondsEventPage" INTEGER[],
ADD COLUMN     "qttSecondsPostPage" INTEGER[],
ADD COLUMN     "qttSecondsPublicationsPage" INTEGER[],
DROP COLUMN "qttVisitors",
ADD COLUMN     "qttVisitors" INTEGER[];
