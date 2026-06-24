import type { PlcTag, TagDetail } from "@/features/tags/types/tag.types"

export const tagsMock: PlcTag[] = [
  {
    id: "tag-press-load",
    name: "Press Load",
    code: "PRS101.LOAD",
    dataType: "float",
    unit: "kN",
    machine: "Hydraulic Press 101",
    gateway: "Press Shop Gateway 02",
    isActive: true,
  },
  {
    id: "tag-cnc-spindle",
    name: "Spindle Speed",
    code: "CNC204.SPD",
    dataType: "integer",
    unit: "rpm",
    machine: "CNC Milling 204",
    gateway: "Istanbul Paint Line Gateway",
    isActive: true,
  },
  {
    id: "tag-pack-alarm",
    name: "Conveyor Alarm",
    code: "PKG022.ALARM",
    dataType: "boolean",
    unit: "",
    machine: "Packaging Cell 22",
    gateway: "Packaging Gateway 03",
    isActive: false,
  },
]

export const tagDetailsMock: TagDetail[] = [
  {
    ...tagsMock[0],
    latestValue: {
      id: "tag-press-load-latest",
      quality: "good",
      timestamp: "2026-06-21T09:42:01.000Z",
      value: "184.4 kN",
    },
    qualitySummary: {
      badCount: 0,
      goodCount: 126,
      lastCheckedAt: "2026-06-21T09:42:01.000Z",
      latestQuality: "good",
      uncertainCount: 3,
    },
    recentHistory: [
      {
        id: "tag-press-load-hist-001",
        quality: "good",
        timestamp: "2026-06-21T09:42:01.000Z",
        value: "184.4 kN",
      },
      {
        id: "tag-press-load-hist-002",
        quality: "good",
        timestamp: "2026-06-21T09:37:01.000Z",
        value: "181.9 kN",
      },
      {
        id: "tag-press-load-hist-003",
        quality: "uncertain",
        timestamp: "2026-06-21T09:32:01.000Z",
        value: "176.2 kN",
      },
    ],
  },
  {
    ...tagsMock[1],
    latestValue: {
      id: "tag-cnc-spindle-latest",
      quality: "uncertain",
      timestamp: "2026-06-21T09:41:55.000Z",
      value: "9,840 rpm",
    },
    qualitySummary: {
      badCount: 1,
      goodCount: 98,
      lastCheckedAt: "2026-06-21T09:41:55.000Z",
      latestQuality: "uncertain",
      uncertainCount: 8,
    },
    recentHistory: [
      {
        id: "tag-cnc-spindle-hist-001",
        quality: "uncertain",
        timestamp: "2026-06-21T09:41:55.000Z",
        value: "9,840 rpm",
      },
      {
        id: "tag-cnc-spindle-hist-002",
        quality: "good",
        timestamp: "2026-06-21T09:36:55.000Z",
        value: "10,120 rpm",
      },
      {
        id: "tag-cnc-spindle-hist-003",
        quality: "good",
        timestamp: "2026-06-21T09:31:55.000Z",
        value: "10,050 rpm",
      },
    ],
  },
  {
    ...tagsMock[2],
    latestValue: {
      id: "tag-pack-alarm-latest",
      quality: "bad",
      timestamp: "2026-06-21T08:58:02.000Z",
      value: "true",
    },
    qualitySummary: {
      badCount: 11,
      goodCount: 44,
      lastCheckedAt: "2026-06-21T08:58:02.000Z",
      latestQuality: "bad",
      uncertainCount: 2,
    },
    recentHistory: [
      {
        id: "tag-pack-alarm-hist-001",
        quality: "bad",
        timestamp: "2026-06-21T08:58:02.000Z",
        value: "true",
      },
      {
        id: "tag-pack-alarm-hist-002",
        quality: "bad",
        timestamp: "2026-06-21T08:53:02.000Z",
        value: "true",
      },
      {
        id: "tag-pack-alarm-hist-003",
        quality: "good",
        timestamp: "2026-06-21T08:48:02.000Z",
        value: "false",
      },
    ],
  },
]
