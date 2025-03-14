"use client"
import { Segment } from "@/types/segment"
import SegmentItem from "./SegmentItem"
import { Table, TableBody } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import ColumnHeader from "./ColumnHeader"
import { Button } from "@/components/ui/button"

const ROWS_PER_PAGE = 15

const SegmentList = ({ segments }: { segments: Segment[] }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter segments based on search query
  const filteredSegments = segments.filter(segment => segment.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // Calculate pagination
  const totalPages = Math.ceil(filteredSegments.length / ROWS_PER_PAGE)
  const paginatedData = filteredSegments
    .sort((a, b) => b.id - a.id)
    .slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE)

  return (
    <>
      <Input
        placeholder="Search by name..."
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value)
          setCurrentPage(1) // Reset to first page on new search
        }}
        className="w-1/4 mb-5"
      />
      <Table>
        <ColumnHeader />
        <TableBody>
          {paginatedData.map(segment => {
            return <SegmentItem key={segment.id} segment={segment} />
          })}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <Pagination className="flex justify-center mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <Button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`cursor-pointer px-3 py-1 rounded-md ${
                    currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}>
                  {index + 1}
                </Button>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}

export default SegmentList
