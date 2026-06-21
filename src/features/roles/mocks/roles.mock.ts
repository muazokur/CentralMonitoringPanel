import type { Role } from "@/features/roles/types/role.types"

export const rolesMock: Role[] = [
  {
    id: "role-operations-manager",
    name: "Operations Manager",
    description: "Full production monitoring and alert management access.",
    userCount: 4,
    permissionCount: 18,
  },
  {
    id: "role-maintenance-lead",
    name: "Maintenance Lead",
    description: "Machine health, gateway diagnostics and alert resolution.",
    userCount: 7,
    permissionCount: 12,
  },
  {
    id: "role-viewer",
    name: "Viewer",
    description: "Read-only access to dashboards, reports and analytics.",
    userCount: 16,
    permissionCount: 6,
  },
]
