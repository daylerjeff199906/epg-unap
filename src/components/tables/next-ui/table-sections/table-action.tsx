'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { MoreVerticalIcon } from "lucide-react";

export const TableAction = () => {
    return (
        <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
                <DropdownTrigger>
                    <Button isIconOnly radius="full" size="sm" variant="light">
                        <MoreVerticalIcon className="text-default-400" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
