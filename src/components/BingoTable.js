// import Table from 'react-bootstrap/Table';

// import EditableLabel from 'react-inline-editing';

// class BingoTable extends React.Component {
// 	state = {
// 		list: [
// 			['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 			['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 			['Empty', 'Empty', 'Free Space', 'Empty', 'Empty'],
// 			['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 			['Empty', 'Empty', 'Empty', 'Empty', 'Empty'], s
// 		],
// 		maxLength: 24,
// 	};

// 	handleSubmitForm = event => {
// 		event.preventDefault();

// 		const prompt = event.target.elements.prompt.value.trim();
// 		//list.push(prompt);
// 		this.setState({
// 			list: [...this.state.list, prompt],
// 			maxLength: 24,
// 		});
// 	};

// 	handleClick = e => {
// 		e.preventDefault();
// 		alert(e.target.elements.option.value);
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<Table striped bordered variant="light">
// 					<tbody>
// 						<tr>
// 							{this.state.list[0].map(prompt => {
// 								const row = <EditableLabel text={prompt}></EditableLabel>;
// 								return <td key="1">{row}</td>;
// 								// const row = <EditableLabel text={prompt}></EditableLabel>;
// 								// return <button key="0" onDoubleClick={this.handleClick}>{<td key="0">{row}</td>}</button>;
// 							})}
// 						</tr>
// 						<tr>
// 							{this.state.list[1].map(prompt => {
// 								const row = <EditableLabel text={prompt}></EditableLabel>;
// 								return <td key="1">{row}</td>;
// 							})}
// 						</tr>
// 						<tr>
// 							{this.state.list[2].map(prompt => {
// 								const row = <EditableLabel text={prompt}></EditableLabel>;
// 								return <td key="2">{row}</td>;
// 							})}
// 						</tr>
// 						<tr>
// 							{this.state.list[3].map(prompt => {
// 								const row = <EditableLabel text={prompt}></EditableLabel>;
// 								return <td key="3">{row}</td>;
// 							})}
// 						</tr>
// 						<tr>
// 							{this.state.list[4].map(prompt => {
// 								const row = <EditableLabel text={prompt}></EditableLabel>;
// 								return <td key="4">{row}</td>;
// 							})}
// 						</tr>
// 					</tbody>
// 				</Table>
// 			</div>
// 		);
// 	}
// }

// export default BingoTable;

import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
	{ key: 'B', name: 'B' },
	{ key: 'I', name: 'I' },
	{ key: 'N', name: 'N' },
	{ key: 'G', name: 'G' },
	{ key: 'O', name: 'O' },
];

// temporarily hardcoded state of table
let state = [
	['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
	['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
	['Empty', 'Empty', 'Free Space', 'Empty', 'Empty'],
	['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
	['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
];

let rows = state.map(subArr => {
	let newObj = {};
	for (let i in columns) {
		newObj[columns[i].key] = subArr[i++];
	}
	return newObj;
	//return { B: subArr[0], I: subArr[1], N: subArr[2], G: subArr[3], O: subArr[4] };
});

class BingoTable extends React.Component {
	state = { rows: rows.slice() };

	onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
		this.setState(state => {
			const rows = state.rows.slice();
			for (let i = fromRow; i <= toRow; i++) {
				rows[i] = { ...rows[i], ...updated };
			}
			return { rows };
		});
	};

	render() {
		console.log(this.state.rows);
		return this.state.rows == null ? (
			'Loading...'
		) : (
			<ReactDataGrid
				columns={columns}
				rowGetter={i => this.state.rows[i]}
				rowsCount={3}
				onGridRowsUpdated={this.onGridRowsUpdated}
				enableCellSelect={true}
			/>
		);
		// return (
		// <ReactDataGrid
		// 	columns={columns}
		// 	rowGetter={i => this.state.rows[i]}
		// 	rowsCount={3}
		// 	onGridRowsUpdated={this.onGridRowsUpdated}
		// 	enableCellSelect={true}
		// />
		// );
	}
}

export default BingoTable;
