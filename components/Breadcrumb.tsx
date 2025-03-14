"use client"
import { Separator } from "@radix-ui/react-separator"
import { SidebarTrigger } from "./ui/sidebar"
import {
  Breadcrumb as UIBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { useSelectedLayoutSegments } from "next/navigation"
import { Fragment } from "react"

const Breadcrumb = () => {
  const segments = useSelectedLayoutSegments()

  console.log("segments", segments)

  const getSegments = () => {
    return segments.map((segment, index) => {
      const href = "/cdp/" + segments.slice(0, index + 1).join("/")
      const name = decodeURIComponent(segment.replace(/-/g, " ")).replace(/\b\w/g, char => char.toUpperCase())

      return (
        <Fragment key={index}>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
          </BreadcrumbItem>
          {index === segments.length - 1 ? null : <BreadcrumbSeparator />}
        </Fragment>
      )
    })
  }

  return (
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <UIBreadCrumb>
        <BreadcrumbList>{getSegments()}</BreadcrumbList>
      </UIBreadCrumb>
    </div>
  )
}

export default Breadcrumb
