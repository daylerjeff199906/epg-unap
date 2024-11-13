import { ChevronLeft, ChevronRight, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useFilterFromUrl } from '@/lib/filter-url';

export interface IDataTablePaginationProps {
    page: number;
    pageSize: number;
    count: number;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    itemsSelected?: number;
}

export const  TablePaginationFilter = ({
    page,
    pageSize,
    count,
    onPageChange,
    onPageSizeChange,
}: IDataTablePaginationProps) => {
    const { createFilter, getParams } = useFilterFromUrl()

     // Obtiene el valor actual de page y pageSize de los parámetros de búsqueda o usa los valores predeterminados
    const currentPage = Number(getParams({key: 'page', value: ''})) || page;
    const currentPageSize = Number(getParams({key: 'pageSize', value: ''})) || pageSize;

    // Actualiza la página en la URL
    const handlePageChange = (page: number) => {
        if (onPageChange) {
            onPageChange(page);
        } else {
            createFilter({ key: 'page', value: page.toString() });
        }
    };

    // Actualiza el tamaño de la página en la URL
    const handlePageSizeChange = (pageSize: number) => {
        if (onPageSizeChange) {
            onPageSizeChange(pageSize);
        } else {
            createFilter({ key: 'pageSize', value: pageSize.toString() });
        }
    }

    return (
        <div className="flex items-center justify-between p-2 bg-white">
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Items por página:</p>
                    <Select
                        value={currentPageSize.toString()}
                        onValueChange={(value) => handlePageSizeChange(Number(value))}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={currentPageSize.toString()} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[15, 20, 30, 40, 50].map((size) => (
                                <SelectItem key={size} value={size.toString()}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Página {currentPage} {count && `de ${Math.ceil(count / currentPageSize)}`}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    >
                        <span className="sr-only">Go to first page</span>
                        <ChevronsLeftIcon className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= Math.ceil(count / currentPageSize)}
                    >
                        <span className="sr-only">Go to next page</span>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => handlePageChange(Math.ceil(count / currentPageSize))}
                        disabled={currentPage >= Math.ceil(count / currentPageSize)}
                    >
                        <span className="sr-only">Go to last page</span>
                        <ChevronsRightIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
