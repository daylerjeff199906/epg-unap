import { Pagination, Select, SelectItem } from "@nextui-org/react";

interface IProps {
    totalItems: number;
    rowsPerPage: number;
    page: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

const rowsPerPageOptions = [
    { key: 5, label: '5' },
    { key: 10, label: '10' },
    { key: 15, label: '15' },
]

export const TablePagination = (props: IProps) => {
    const { totalItems, rowsPerPage, page, onPageChange, onRowsPerPageChange } = props;
    const totalPages = Math.ceil(totalItems / rowsPerPage);

    return (
        <div className="flex justify-between w-full">
            <Pagination 
                showControls
                total={totalPages} 
                page={page} 
                onChange={onPageChange} 
            />
            <Select value={rowsPerPage} onSelectionChange={e => onRowsPerPageChange(Number(e))} className="w-24">
                {rowsPerPageOptions.map(size => (
                    <SelectItem key={size.key} value={size.key}>
                        {size.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
