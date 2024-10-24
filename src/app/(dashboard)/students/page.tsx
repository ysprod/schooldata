/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Input, Chip, User, Pagination, Selection, SortDescriptor,
  Button, ChipProps, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Chargeur from "@/components/chargeur";
import { ChevronDownIcon } from "@/components/nextui/ChevronDownIcon";
import { SearchIcon } from "@/components/nextui/SearchIcon";
import { capitalize, formatDate } from "@/app/utils/functions";
import { PlusIcon } from "@radix-ui/react-icons";
import { toast } from "@/components/ui/use-toast"; 
import { DeleteIcon } from "@/components/nextui/Deleteicon";
import { EditIcon } from "@/components/nextui/Editicon";
import { EyeIcon } from "@/components/nextui/Eyeicon";
import { Student } from "@/lib/interfaces";

export const statusColorMap: Record<string, ChipProps["color"]> = {
  Masculin: "success",
  Feminin: "danger",
};

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOM", uid: "nom", sortable: true },
  { name: "DATE DE NAISSANCE", uid: "birthday", sortable: true },
  { name: "ADRESSE", uid: "address", sortable: true },
  { name: "LIEU DE NAISSANCE", uid: "lieunaissance" },
  { name: "TELEPHONE", uid: "phone", sortable: true },
  { name: "GENRE", uid: "sex", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Homme", uid: "Male" },
  { name: "Femme", uid: "Female" },
];

export const INITIAL_VISIBLE_COLUMNS = [
  "nom",
  "datenaissance",
  "birthday",
  "actions",
];

export const useFetchDemandes = (
  setData: (data: Student[]) => void,
  setIsLoading: (isLoading: boolean) => void
) => {
  const fetchDemandes = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = null;
      if (Array.isArray(data)) {
        const formattedData = data.map((item) => ({
          ...item,
          datenaissance: formatDate(item.birthday),
        }));
        setData(formattedData);
      } else {
        setData([]);
      }
    } catch (error) {
      toast({
        description: `Erreur lors de la récupération des données. ${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, [setData, setIsLoading]);

  return fetchDemandes;
};
 
export const Pasdedemandes = () => {
  return (
    <>
      <p className="text-black">
        Commencez par enregistrer un nouveau apprenant
        <br />
        en cliquant sur le bouton Nouveau Apprenant ou
      </p>
      <Link
        href="/list/students/create"
        className="p-2 px-6 py-2 text-sm font-bold text-white bg-orange-400 rounded shadow-sm cursor-pointer btn-get-started scrollto md:p-4 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Cliquez ici
      </Link>
    </>
  );
};

export const Mesactions = ({ demandeid }) => {
  return (
    <div className="relative flex items-center gap-2">
      <Tooltip content="Details">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Link href={`/list/students/${demandeid}`}><EyeIcon /></Link>

        </span>
      </Tooltip>
      <Tooltip content="Modifier">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <EditIcon />
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Supprimer">
        <span className="text-lg text-danger cursor-pointer active:opacity-50">
          <DeleteIcon />
        </span>
      </Tooltip>
    </div>
  );
};


export default function Page() {
  const [data, setData] = useState<Student[]>([]);
  const [isloading, setIsLoading] = useState(true);
  const fetchDemandes = useFetchDemandes(setData, setIsLoading);
  useEffect(() => {
    fetchDemandes();
  }, [fetchDemandes]);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "phone",
    direction: "ascending",
  });
  const hasSearchFilter = Boolean(filterValue);
  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredDemandes = useMemo(() => {
    let filteredDemandes = [...data];
    if (hasSearchFilter) {
      filteredDemandes = filteredDemandes.filter((demande) =>
        demande.firstName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredDemandes = filteredDemandes.filter((demande) =>
        Array.from(statusFilter).includes(demande.sex)
      );
    }
    return filteredDemandes;
  }, [data, filterValue, statusFilter]);

  const pages = Math.ceil(filteredDemandes.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredDemandes.slice(start, end);
  }, [page, filteredDemandes, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: Student, b: Student) => {
      const first = a[sortDescriptor.column as keyof Student] as number;
      const second = b[sortDescriptor.column as keyof Student] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((demande: Student, columnKey: React.Key) => {
    const cellValue = demande[columnKey as keyof Student];
    switch (columnKey) {
      case "nom":
        const lavatar =
          demande.urlphoto ? demande.urlphoto : "../avatar.png";
        return (
          <User
            avatarProps={{ radius: "lg", src: lavatar }}
            description={demande.lastName}
            name={cellValue}
          >
            {demande.firstName}
          </User>
        );
      case "datenaissance":
        return (
          <div className="flex ">
            <p className="capitalize text-bold text-small">{cellValue}</p>
          </div>
        );
      case "sexe":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[demande.sex]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return <Mesactions demandeid={demande.id} />;
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Recherche par nom..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Genre
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="apprenants"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Champs
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              as={Link}
              href="/list/students/create"
              color="danger"
              className="hover:text-yellow-400"
              endContent={<PlusIcon />}
            >
              Nouveau
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-small ">
            Total : {data.length} Apprenant(s)
          </span>
          <label className="flex items-center  text-small">
            Lignes par page :
            <select
              className="bg-transparent outline-none text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    data.length,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <span className="w-[30%] text-small">
          {selectedKeys === "all"
            ? "Toutes les apprenants selectionnées"
            : `${selectedKeys.size} de ${filteredDemandes.length} selectionné(s)`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
            className=" bg-orange-600"
          >
            Precedent
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            className="bg-green-600"
            onPress={onNextPage}
          >
            Suivant
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <main className="flex flex-col items-center justify-between p-2 w-full">
      {isloading ? (
        <Chargeur />
      ) : (
        <>
          <h1 className="pt-4 text-3xl font-bold text-center ">
            LISTE DES APPRENANTS
          </h1>
          <Table
            aria-label="Liste des apprenants"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
              wrapper: "max-h-[382px]",
            }}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
          >
            <TableHeader columns={headerColumns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                  allowsSorting={column.sortable}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent={<Pasdedemandes />} items={sortedItems}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>
      )}
    </main>
  );
}
