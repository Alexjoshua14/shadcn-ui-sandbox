'use client'

import { FC } from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from './ui/pagination'

interface PaginationWrapperProps {

}

const PaginationWrapper: FC<PaginationWrapperProps> = ({ }) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => console.log("Previous")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => console.log("next")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWrapper