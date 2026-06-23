import type {
  Machine,
  MachineDetail,
} from "@/features/machines/types/machine.types"

export const machinesMock: Machine[] = [
  {
    id: "mach-press-101",
    name: "Hydraulic Press 101",
    code: "PRS-101",
    status: "active",
    gateway: "Press Shop Gateway 02",
    currentState: "running",
    oee: 84.6,
    lastUpdate: "2026-06-21T09:41:16.000Z",
  },
  {
    id: "mach-cnc-204",
    name: "CNC Milling 204",
    code: "CNC-204",
    status: "warning",
    gateway: "Istanbul Paint Line Gateway",
    currentState: "idle",
    oee: 69.8,
    lastUpdate: "2026-06-21T09:39:51.000Z",
  },
  {
    id: "mach-pack-022",
    name: "Packaging Cell 22",
    code: "PKG-022",
    status: "critical",
    gateway: "Packaging Gateway 03",
    currentState: "stopped",
    oee: 41.2,
    lastUpdate: "2026-06-21T08:58:02.000Z",
  },
]

export const machineDetailsMock: MachineDetail[] = [
  {
    ...machinesMock[0],
    connectedTags: [
      {
        id: "tag-press-load",
        name: "Press Load",
        code: "PRS101.LOAD",
        dataType: "float",
        unit: "kN",
        isActive: true,
      },
      {
        id: "tag-press-cycle",
        name: "Cycle Count",
        code: "PRS101.CYCLE",
        dataType: "integer",
        unit: "pcs",
        isActive: true,
      },
    ],
    latestTagValues: [
      {
        id: "mach-value-001",
        tag: "PRS101.LOAD",
        value: "184.4 kN",
        quality: "good",
        timestamp: "2026-06-21T09:42:01.000Z",
      },
      {
        id: "mach-value-002",
        tag: "PRS101.CYCLE",
        value: "1,284 pcs",
        quality: "good",
        timestamp: "2026-06-21T09:41:55.000Z",
      },
    ],
    oeeSummary: {
      availability: 91.4,
      performance: 88.1,
      quality: 98.7,
      oee: 79.5,
    },
    alerts: [
      {
        id: "mach-alert-001",
        severity: "warning",
        tag: "PRS101.LOAD",
        message: "Press load exceeded warning threshold.",
        status: "pending",
        createdAt: "2026-06-21T09:21:04.000Z",
      },
    ],
    history: [
      {
        id: "mach-history-001",
        timestamp: "2026-06-21T09:00:00.000Z",
        state: "running",
        event: "Production run started",
        oee: 84.6,
        durationMinutes: 42,
      },
      {
        id: "mach-history-002",
        timestamp: "2026-06-21T08:35:00.000Z",
        state: "idle",
        event: "Material wait",
        oee: 76.4,
        durationMinutes: 18,
      },
    ],
  },
  {
    ...machinesMock[1],
    connectedTags: [
      {
        id: "tag-cnc-spindle",
        name: "Spindle Speed",
        code: "CNC204.SPD",
        dataType: "integer",
        unit: "rpm",
        isActive: true,
      },
      {
        id: "tag-cnc-vibration",
        name: "Vibration",
        code: "CNC204.VIB",
        dataType: "float",
        unit: "mm/s",
        isActive: true,
      },
    ],
    latestTagValues: [
      {
        id: "mach-value-003",
        tag: "CNC204.SPD",
        value: "9,840 rpm",
        quality: "uncertain",
        timestamp: "2026-06-21T09:41:55.000Z",
      },
      {
        id: "mach-value-004",
        tag: "CNC204.VIB",
        value: "4.2 mm/s",
        quality: "good",
        timestamp: "2026-06-21T09:41:32.000Z",
      },
    ],
    oeeSummary: {
      availability: 83.3,
      performance: 78.4,
      quality: 95.8,
      oee: 62.6,
    },
    alerts: [
      {
        id: "mach-alert-002",
        severity: "warning",
        tag: "CNC204.SPD",
        message: "Spindle speed variance returned to normal.",
        status: "resolved",
        createdAt: "2026-06-21T07:44:30.000Z",
      },
    ],
    history: [
      {
        id: "mach-history-003",
        timestamp: "2026-06-21T09:15:00.000Z",
        state: "idle",
        event: "Tool change",
        oee: 69.8,
        durationMinutes: 24,
      },
      {
        id: "mach-history-004",
        timestamp: "2026-06-21T08:20:00.000Z",
        state: "running",
        event: "Batch machining",
        oee: 72.1,
        durationMinutes: 55,
      },
    ],
  },
  {
    ...machinesMock[2],
    connectedTags: [
      {
        id: "tag-pack-alarm",
        name: "Conveyor Alarm",
        code: "PKG022.ALARM",
        dataType: "boolean",
        unit: "",
        isActive: false,
      },
      {
        id: "tag-pack-speed",
        name: "Conveyor Speed",
        code: "PKG022.SPEED",
        dataType: "float",
        unit: "m/min",
        isActive: true,
      },
    ],
    latestTagValues: [
      {
        id: "mach-value-005",
        tag: "PKG022.ALARM",
        value: "true",
        quality: "bad",
        timestamp: "2026-06-21T08:58:02.000Z",
      },
      {
        id: "mach-value-006",
        tag: "PKG022.SPEED",
        value: "0 m/min",
        quality: "bad",
        timestamp: "2026-06-21T08:58:02.000Z",
      },
    ],
    oeeSummary: {
      availability: 55.2,
      performance: 61.8,
      quality: 92.1,
      oee: 31.4,
    },
    alerts: [
      {
        id: "mach-alert-003",
        severity: "critical",
        tag: "PKG022.ALARM",
        message: "Packaging conveyor safety alarm is active.",
        status: "pending",
        createdAt: "2026-06-21T08:58:12.000Z",
      },
    ],
    history: [
      {
        id: "mach-history-005",
        timestamp: "2026-06-21T08:58:02.000Z",
        state: "stopped",
        event: "Safety stop",
        oee: 41.2,
        durationMinutes: 44,
      },
      {
        id: "mach-history-006",
        timestamp: "2026-06-21T08:12:00.000Z",
        state: "running",
        event: "Packaging run",
        oee: 68.4,
        durationMinutes: 46,
      },
    ],
  },
]
