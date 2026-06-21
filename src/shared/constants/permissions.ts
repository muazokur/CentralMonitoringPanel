export const PERMISSIONS = {
  dashboardView: "dashboard.view",
  edgeGatewaysView: "edgeGateways.view",
  edgeGatewaysManage: "edgeGateways.manage",
  machinesView: "machines.view",
  machinesCreate: "machines.create",
  machinesUpdate: "machines.update",
  machinesDelete: "machines.delete",
  tagsView: "tags.view",
  tagsManage: "tags.manage",
  oeeView: "oee.view",
  analyticsView: "analytics.view",
  alertsView: "alerts.view",
  alertsManage: "alerts.manage",
  reportsView: "reports.view",
  usersView: "users.view",
  usersManage: "users.manage",
  rolesView: "roles.view",
  rolesManage: "roles.manage",
  settingsView: "settings.view",
  settingsManage: "settings.manage",
} as const

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS]

export const ALL_PERMISSIONS = Object.values(PERMISSIONS)
