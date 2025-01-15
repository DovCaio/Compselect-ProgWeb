/*
  Warnings:

  - Changed the type of `qttSecondsAuthorsPage` on the `Statistics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `qttSecondsEventPage` on the `Statistics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `qttSecondsPostPage` on the `Statistics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `qttSecondsPublicationsPage` on the `Statistics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `qttVisitors` on the `Statistics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Statistics" DROP COLUMN "qttSecondsAuthorsPage",
ADD COLUMN     "qttSecondsAuthorsPage" INTEGER NOT NULL,
DROP COLUMN "qttSecondsEventPage",
ADD COLUMN     "qttSecondsEventPage" INTEGER NOT NULL,
DROP COLUMN "qttSecondsPostPage",
ADD COLUMN     "qttSecondsPostPage" INTEGER NOT NULL,
DROP COLUMN "qttSecondsPublicationsPage",
ADD COLUMN     "qttSecondsPublicationsPage" INTEGER NOT NULL,
DROP COLUMN "qttVisitors",
ADD COLUMN     "qttVisitors" INTEGER NOT NULL;
