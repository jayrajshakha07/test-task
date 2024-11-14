"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Arrow from "../assets/Arrow";
import { invoices } from "@/constant/ConstantData";

export function TableCo() {
  return (
    <Table>
      <TableCaption>
        <span className="font-[system-ui]">
          A list of your recent invoices.
        </span>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[33%] font-[system-ui] ">User</TableHead>
          <TableHead className="w-[33%] font-[system-ui]">Event</TableHead>
          <TableHead className="w-[33%] font-[system-ui]">
            <div className="flex items-center">
              <Arrow />
              Date
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.User}>
            <TableCell className="font-[system-ui] w-[33%]">
              <div className="flex gap-[6px]">
                <Avatar>
                  <AvatarImage
                    className="w-8 h-8 rounded-full"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-[system-ui]">{invoice.User}</span>
                  <span className="font-[system-ui] text-[#71717a]">
                    {invoice.email}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-[system-ui] w-[33%]">
              {invoice.Event}
            </TableCell>
            <TableCell className="font-[system-ui] text-[#71717a] w-[33%]">
              <div className="flex"> {invoice.Date}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
