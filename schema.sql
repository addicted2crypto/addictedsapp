//start of models 
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
  relationMode = "prisma"
}


model Profile {
  id String @id @default(uuid())
  userId String @unique
  name String
  imageUrl String @db.Text
  email String @db.Text

  servers Server[]
  members Member[]
  channels Channel[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Server {
  id String
  name String
  imageUrl String @db.text
  inviteCode String @db.text

  profileId String
  profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)

  members Member[]
  channels Channel[]

createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

@@index([profileId])
}

enum MemberRole {
  ADMIN
  MODERATOR
  GUEST
}

model Member {
  id String @id @default(uuid())
  role MemberRole @default(GUEST)
 
  profileId String
  profile Profile @relation(fields: [profileId], references: [id], onDelete: Cascade )

  serverId String
  server Server @relation(fields: [serverId], references: [id], onDelete: Cascade)
 
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([profileId])
  @@index([serverId])
}

enum ChannelType {
  TEXT 
  AUDIO 
  VIDEO 
}

model Channel {
  id String @id @default(uuid())
  name String
  type ChannelType @dafault(TEXT)

  profile Profile @relations(fields: [profileId], references: [id], onDelete: Cascade)

  serverId String
  server Server @relation(fields: [serverId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([profileId])
  @@index([serverId])
}
