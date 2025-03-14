export interface Segment {
  id: number
  name: string
  description: string | null
  userCount: number | null
  queryType: string | null
  queryJson: string | null
  createdOn: Date | null
  stage: string | null
  section: number | null
  level: number | null
  isActive: boolean | null
  clickTracker: string | null
  impressionCap: number | null
  saleWindow: number | null
  pixelingPercentage: number | null
  overallReach: number | null
  routeId: number | null
  isArchived: boolean | null
  tag: string | null
  isPredictive: boolean | null
  isChannelOrchestrated: boolean | null
  segmentPriority: string | null
  isJourneySegment: boolean | null
  isPersonalized: boolean | null
  creatorEmailId: string | null
  dmpOfflineEventQueueStatus: number | null
  notifyEmail: string | null | null
  version: number | 1 | null
  updatedOn: Date | null | null
  updaterEmailId: string | null | null
  funnelMetaData: unknown | null
  segmentMetadata: unknown | null
  segDetails: { totalCount?: number; details?: Array<Record<string, unknown>> | null }
  activeChannelCount: number | null | 0 | null
  segmentAdspend: number | null
  segmentDetails: Record<string, unknown> | null
  type: string | null
}
