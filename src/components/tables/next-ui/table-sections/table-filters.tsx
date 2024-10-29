// import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
// import React from "react";
// import { ChevronDownIcon, SearchIcon } from "./icons";

// interface IProps {
//     filterValue: string;
//     onFilterChange: (value: string) => void;
//     statusFilter: Set<string>;
//     onStatusFilterChange: (selectedKeys: Set<string>) => void;
//     visibleColumns: Set<string>;
//     onVisibleColumnsChange: (selectedKeys: Set<string>) => void;
// }

// export default function TableFilters(props: IProps) {
//     const { filterValue, onFilterChange, statusFilter, onStatusFilterChange, visibleColumns, onVisibleColumnsChange } = props;
//     return (
//         <div className="table-filters">
//             <Input
//                 isClearable
//                 startContent={<SearchIcon />}
//                 value={filterValue}
//                 placeholder="Search by name..."
//                 onValueChange={onFilterChange}
//             />
//             <Dropdown>
//                 <DropdownTrigger>
//                     <Button endContent={<ChevronDownIcon />}>Status</Button>
//                 </DropdownTrigger>
//                 <DropdownMenu selectedKeys={statusFilter} onSelectionChange={onStatusFilterChange}>
//                     {statusOptions.map(option => (
//                         <DropdownItem key={option.uid}>{option.name}</DropdownItem>
//                     ))}
//                 </DropdownMenu>
//             </Dropdown>
//             <Dropdown>
//                 <DropdownTrigger>
//                     <Button endContent={<ChevronDownIcon />}>Columns</Button>
//                 </DropdownTrigger>
//                 <DropdownMenu selectedKeys={visibleColumns} onSelectionChange={onVisibleColumnsChange}>
//                     {columns.map(column => (
//                         <DropdownItem key={column.uid}>{column.name}</DropdownItem>
//                     ))}
//                 </DropdownMenu>
//             </Dropdown>
//         </div>
//     );
// }
