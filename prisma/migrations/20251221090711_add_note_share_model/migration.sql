-- CreateTable
CREATE TABLE `note_shares` (
    `id` VARCHAR(191) NOT NULL,
    `noteId` VARCHAR(191) NOT NULL,
    `sharedBy` INTEGER NOT NULL,
    `sharedWith` INTEGER NOT NULL,
    `permission` ENUM('READ', 'EDIT') NOT NULL DEFAULT 'READ',
    `isRevoked` BOOLEAN NOT NULL DEFAULT false,
    `revokedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `note_shares_noteId_isRevoked_idx`(`noteId`, `isRevoked`),
    INDEX `note_shares_sharedWith_isRevoked_idx`(`sharedWith`, `isRevoked`),
    UNIQUE INDEX `note_shares_noteId_sharedWith_key`(`noteId`, `sharedWith`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `note_shares` ADD CONSTRAINT `note_shares_noteId_fkey` FOREIGN KEY (`noteId`) REFERENCES `note`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note_shares` ADD CONSTRAINT `note_shares_sharedBy_fkey` FOREIGN KEY (`sharedBy`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `note_shares` ADD CONSTRAINT `note_shares_sharedWith_fkey` FOREIGN KEY (`sharedWith`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
