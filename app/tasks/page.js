import AddTask from "@/components/Add-Task";
import Checkbox from "@/components/form/Checkbox";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Notify from "@/components/Notify";
import { MdDeleteForever } from "react-icons/md";

async function getData() {
	try {
		const res = await fetch(
			process.env.NODE_ENV === "development"
				? process.env.BASE_URL_DEV
				: process.env.BASE_URL_LOCAL + "/api/tasks",
			{ method: "GET", cache: "no-store" }
		);
		const result = await res.json();
		console.log(result);
		// The return value is *not* serialized
		// You can return Date, Map, Set, etc.

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

const Tasks = async () => {
	// const result = await getData();
	const columns = [
		{
			id: "id",
			name: "",
			accessor: "id",
			width: "w-[5%]",
		},
		{
			id: "task",
			name: "Task",
			accessor: "task",
			width: "w-[30%]",
		},
		{
			id: "description",
			name: "Description",
			accessor: "description",
			width: "w-[55%]",
		},
		{
			id: "actions",
			name: "",
			accessor: "",
			width: "w-[10%]",
		},
	];

	const data = [
		{
			id: <Checkbox />,
			task: "The Sliding Mr. Bones (Next Stop, Pottersville)",
			description: "Malcolm Lockyer",
			actions: (
				<button className="delete--button">
					<span className="font-bold">Delete</span>
					<span className="inline">
						<MdDeleteForever size={28} />
					</span>
				</button>
			),
		},
		{
			id: <Checkbox />,
			task: "The Sliding Mr. Bones (Next Stop, Pottersville)",
			description: "Malcolm Lockyer",
			actions: (
				<button className="delete--button">
					<span className="font-bold">Delete</span>
					<span className="inline">
						<MdDeleteForever size={28} />
					</span>
				</button>
			),
		},
		{
			id: <Checkbox />,
			task: "The Sliding Mr. Bones (Next Stop, Pottersville)",
			description: "Malcolm Lockyer",
			actions: (
				<button className="delete--button">
					<span className="font-bold">Delete</span>
					<span className="inline">
						<MdDeleteForever size={28} />
					</span>
				</button>
			),
		},
		{
			id: <Checkbox />,
			task: "The Sliding Mr. Bones (Next Stop, Pottersville)",
			description: "Malcolm Lockyer",
			actions: (
				<button className="delete--button">
					<span className="font-bold">Delete</span>
					<span className="inline">
						<MdDeleteForever size={28} />
					</span>
				</button>
			),
		},
	];

	return (
		<>
			<div className="flex flex-col items-center h-screen p-4 lg:w-[80vw] md:w-[80vw] sm:w-[90vw] w-[90vw] m-auto text-center">
				<Header />
				<div className="flex justify-between items-center w-full mb-4">
					<AddTask />
				</div>
				<table className="w-full text-left border-spacing-1 border-separate border border-slate-400 rounded-md">
					<thead className="bg-blue-800">
						<tr>
							{columns.map((col, index) => {
								return (
									<th
										className={`px-4 py-2 rounded-md text-white ${col.width} tracking-wider`}
										key={index}
									>
										{col.name}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => {
							const isOddRow = index % 2 !== 0 ? true : false;
							return (
								<tr key={index}>
									<td
										className={`table--row ${isOddRow ? "bg-slate-100" : ""}`}
									>
										{item.id}
									</td>
									<td
										className={`table--row ${isOddRow ? "bg-slate-100" : ""}`}
									>
										{item.task}
									</td>
									<td
										className={`table--row ${isOddRow ? "bg-slate-100" : ""}`}
									>
										{item.description}
									</td>
									<td
										className={`table--row p-1 ${
											isOddRow ? "bg-slate-100" : ""
										}`}
									>
										{item.actions}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<Notify />
		</>
	);
};

export default Tasks;
