"use client"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { TableCell, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Segment } from "@/types/segment"
import { Archive, Copy } from "lucide-react"
import Link from "next/link"

const SegmentItem = ({ segment }: { segment: Segment }) => {
  const tags: string[] = JSON.parse(segment.tag || "[]")
  const slug: string = segment.name.toLowerCase().replaceAll(" ", "-")

  return (
    <TableRow>
      <TableCell>{segment.id}</TableCell>
      <TableCell>
        <Switch checked={segment.isActive === 1} />
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link className="font-semibold" href={`segments/${slug}`}>
                {segment.name}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{segment.description}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>{segment.activeChannelCount}</TableCell>
      <TableCell>
        {tags.map((item, index) => (
          <Badge key={index}>{item}</Badge>
        ))}
      </TableCell>

      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{segment.updaterEmailId || segment.creatorEmailId}</TooltipTrigger>
            <TooltipContent>
              {new Date(segment.createdOn || segment.updatedOn).toLocaleDateString()}{" "}
              {new Date(segment.createdOn || segment.updatedOn).toLocaleTimeString()}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2 text-gray-400">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Archive
                  onClick={() => console.log("Archive clicked")}
                  className="cursor-pointer hover:text-gray-500 w-4 h-4"
                />
              </TooltipTrigger>
              <TooltipContent>Archive Segment</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Copy
                  onClick={() => console.log("Copy clicked")}
                  className="cursor-pointer hover:text-gray-500 w-4 h-4"
                />
              </TooltipTrigger>
              <TooltipContent>Duplicate Segment</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default SegmentItem
