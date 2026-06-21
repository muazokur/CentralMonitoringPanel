import type { PlatformUser } from "@/features/users/types/user.types"

export const usersMock: PlatformUser[] = [
  {
    id: "user-ayse",
    fullName: "Ayse Demir",
    email: "ayse.demir@factory.example",
    role: "Operations Manager",
    status: "active",
    lastLogin: "2026-06-21T09:12:00.000Z",
  },
  {
    id: "user-emre",
    fullName: "Emre Kaya",
    email: "emre.kaya@factory.example",
    role: "Maintenance Lead",
    status: "active",
    lastLogin: "2026-06-20T18:44:00.000Z",
  },
  {
    id: "user-zeynep",
    fullName: "Zeynep Arslan",
    email: "zeynep.arslan@factory.example",
    role: "Viewer",
    status: "inactive",
  },
]
