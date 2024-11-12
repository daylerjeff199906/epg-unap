'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export const PaginationFilter = (
    { totalPages }: { totalPages: number }
) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', String(pageNumber));
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <div className="flex w-full bg-white">
            <Pagination className="flex w-full justify-start">
                <PaginationContent>
                    <PaginationItem>
                        {currentPage > 1 ? (
                            <PaginationPrevious
                                href={createPageURL(currentPage - 1)}
                            />
                            ) : (
                                <PaginationPrevious 
                                    href={''} 
                                    className={`${currentPage === 1 && 'cursor-default text-muted-foreground'}`} 
                                    title="Hola"
                                />
                            )
                        }
                    </PaginationItem>
                    {
                        allPages.map((page, index) => (
                            <PaginationItem key={index}>
                                {typeof page === 'number' ? (
                                    <PaginationLink
                                        isActive={page === currentPage}
                                        href={createPageURL(page)}
                                    >
                                        {page}
                                    </PaginationLink>
                                ) : (
                                    <PaginationEllipsis />
                                )}
                            </PaginationItem>
                        ))
                    }
                    <PaginationItem>
                        {currentPage < totalPages ? (
                                <PaginationNext
                                    href={createPageURL(currentPage + 1)}
                                />
                            ) : (
                                <PaginationNext
                                    href={''}
                                    className={`${currentPage === totalPages && 'cursor-default text-muted-foreground'}`}
                                />
                            )
                        }
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
        return [1, 2, 3, <PaginationEllipsis key="left-ellipsis" />, totalPages - 1, totalPages];
    }
    if (currentPage >= totalPages - 2) {
        return [1, 2, <PaginationEllipsis key="right-ellipsis" />, totalPages - 2, totalPages - 1, totalPages];
    }
    return [
        1,
        <PaginationEllipsis key="left-ellipsis" />,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        <PaginationEllipsis key="right-ellipsis" />,
        totalPages,
    ];
};
