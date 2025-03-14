import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tag } from "lucide-react"

const ColumnHeader = () => {
  return (
    <TableHeader className="[&_*]:font-bold bg-gray-100">
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Active</TableHead>
        <TableHead>Segment Name</TableHead>
        <TableHead>Channels</TableHead>
        <TableHead className="items-center justify-center">
          <Tag />
        </TableHead>
        <TableHead>Last Updated</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  )
}

export default ColumnHeader
