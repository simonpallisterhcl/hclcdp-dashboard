"use client"
import ColumnHeader from "./components/ColumnHeader"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { SlidersVertical } from "lucide-react"

const SegmentsLoading = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 flex items-center gap-2">
        <SlidersVertical className="text-xl" /> Segments
      </h1>
      <Input placeholder="Search by name..." className="w-1/4 mb-5" />
      <Table>
        <ColumnHeader />
        <TableBody>
          {[...Array(15)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-6 w-10" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-10" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-12" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-8" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-32" />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-5" />
                  <Skeleton className="h-6 w-5" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SegmentsLoading
