<template>
	<Card title="Employees">
		<div class="flex flex-col gap-5 w-full">
			<div class="flex">
				<div class="flex gap-1 flex-1 items-center">
					<Input
						variant="dark"
						size="comfortable"
						rounded="smooth"
						placeholder="Invite by email, split by comma"
						class="min-w-[340px] sm:min-w-auto"
					/>
					<Button class="w-auto px-5" size="lg">Invite</Button>
				</div>
				<div class="flex gap-4 items-center">
					<div>
						<img src="/images/common/info-icon.svg" />
					</div>
					<Button variant="outline">Download CSV Template</Button>
					<Button variant="outline">Upload CSV or XSLX file</Button>
				</div>
			</div>
			<div class="flex gap-2">
				<div class="flex gap-2 flex-1">
					<Select label="a" variant="dark" radius="large">
						<SelectTrigger class="w-[140px]">
							<SelectValue placeholder="Team" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple"> Apple </SelectItem>
								<SelectItem value="banana"> Banana </SelectItem>
								<SelectItem value="blueberry"> Blueberry </SelectItem>
								<SelectItem value="grapes"> Grapes </SelectItem>
								<SelectItem value="pineapple"> Pineapple </SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select label="a" variant="dark" radius="large">
						<SelectTrigger class="w-[140px]">
							<SelectValue placeholder="Division" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple"> Apple </SelectItem>
								<SelectItem value="banana"> Banana </SelectItem>
								<SelectItem value="blueberry"> Blueberry </SelectItem>
								<SelectItem value="grapes"> Grapes </SelectItem>
								<SelectItem value="pineapple"> Pineapple </SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select label="a" variant="dark" radius="large">
						<SelectTrigger class="w-[140px]">
							<SelectValue placeholder="Country" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple"> Apple </SelectItem>
								<SelectItem value="banana"> Banana </SelectItem>
								<SelectItem value="blueberry"> Blueberry </SelectItem>
								<SelectItem value="grapes"> Grapes </SelectItem>
								<SelectItem value="pineapple"> Pineapple </SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div>
					<div class="relative w-[340px] max-w-sm items-center">
						<Input
							variant="dark"
							size="comfortable"
							rounded="smooth"
							id="search"
							type="text"
							placeholder="Search..."
							class="pr-6 px-5"
						/>
						<span class="absolute end-5 inset-y-0 flex items-center justify-center">
							<img src="/images/common/search-icon.svg" class="size-6 text-muted-foreground" />
						</span>
					</div>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
						<TableHead v-for="header in headerGroup.headers" :key="header.id">
							<FlexRender
								v-if="!header.isPlaceholder"
								:render="header.column.columnDef.header"
								:props="header.getContext()"
							/>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<template v-if="table.getRowModel().rows?.length">
						<TableRow
							v-for="row in table.getRowModel().rows"
							:key="row.id"
							:data-state="row.getIsSelected() && 'selected'"
						>
							<TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
								<FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
							</TableCell>
						</TableRow>
					</template>

					<TableRow v-else>
						<TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	</Card>
</template>

<script setup lang="ts">
definePageMeta({ name: "manage", middleware: "is-authenticated" });
import type {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
} from "@tanstack/vue-table";
import {
	FlexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useVueTable,
} from "@tanstack/vue-table";

import { h, ref } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { valueUpdater } from "@/lib/utils";

export interface Payment {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
}

const data: Payment[] = [
	{
		id: "m5gr84i9",
		amount: 316,
		status: "success",
		email: "ken99@yahoo.com",
	},
	{
		id: "3u1reuv4",
		amount: 242,
		status: "success",
		email: "Abe45@gmail.com",
	},
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "Monserrat44@gmail.com",
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "Silas22@gmail.com",
	},
	{
		id: "bhqecj4p",
		amount: 721,
		status: "failed",
		email: "carmella@hotmail.com",
	},
];

const columns: ColumnDef<Payment>[] = [
	{
		id: "select",
		header: ({ table }) =>
			h(Checkbox, {
				checked:
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate"),
				"onUpdate:checked": (value) => table.toggleAllPageRowsSelected(!!value),
				ariaLabel: "Select all",
				class: "flex",
			}),
		cell: ({ row }) =>
			h(Checkbox, {
				checked: row.getIsSelected(),
				"onUpdate:checked": (value) => row.toggleSelected(!!value),
				class: "flex",
				ariaLabel: "Select row",
			}),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "firstName",
		header: "First name",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "lastName",
		header: "Last name",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "division",
		header: "Division",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "team",
		header: "Team",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "country",
		header: "Country",
		cell: ({ row }) => h("div", { class: "capitalize text-left" }, row.getValue("status")),
	},
	{
		accessorKey: "Actions",
		header: () => h("div", { class: "capitalize text-right" }, "Actions"),
		cell: ({ row }) => h("div", { class: "capitalize text-right" }, row.getValue("status")),
	},
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
	data,
	columns,
	getCoreRowModel: getCoreRowModel(),
	getPaginationRowModel: getPaginationRowModel(),
	getSortedRowModel: getSortedRowModel(),
	getFilteredRowModel: getFilteredRowModel(),
	onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
	onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
	onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
	onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
	state: {
		get sorting() {
			return sorting.value;
		},
		get columnFilters() {
			return columnFilters.value;
		},
		get columnVisibility() {
			return columnVisibility.value;
		},
		get rowSelection() {
			return rowSelection.value;
		},
	},
});
</script>
