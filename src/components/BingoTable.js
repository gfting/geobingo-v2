import { Table, Button } from 'react-bootstrap';
import React from 'react';
import EditableLabel from 'react-inline-editing';

// const BingoCell = ({ text, onChange }) => {
// 	return <EditableLabel text={text}></EditableLabel>;
// };

class BingoTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boardState: [
				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
				['Empty', 'Empty', 'Free Space', 'Empty', 'Empty'],
				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
			],
			maxLength: 24,
		};
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSubmitForm = event => {
		event.preventDefault();

		// const prompt = event.target.elements.prompt.value.trim();
		//boardState.push(prompt);
		this.setState({
			boardState: [...this.state.boardState],
			maxLength: 24,
		});
		console.log(this.state.boardState);
	};

	handleClick = e => {
		e.preventDefault();
		alert(e.target.elements.option.value);
	};

	handleTextChange = (ev, newText) => {
		console.log(ev);
	};

	render() {
		return (
			<div>
				<Table striped bordered variant="light">
					<tbody>
						<tr>
							{this.state.boardState[0].map(prompt => {
								const row = <EditableLabel text={prompt}></EditableLabel>;
								return <td key={prompt}>{row}</td>;
								// const row = <EditableLabel text={prompt}></EditableLabel>;
								// return <button key="0" onDoubleClick={this.handleClick}>{<td key="0">{row}</td>}</button>;
							})}
						</tr>
						<tr>
							{this.state.boardState[1].map(prompt => {
								const row = <EditableLabel text={prompt}></EditableLabel>;
								return <td key={prompt}>{row}</td>;
							})}
						</tr>
						<tr>
							{this.state.boardState[2].map(prompt => {
								const row = <EditableLabel text={prompt}></EditableLabel>;
								return <td key={prompt}>{row}</td>;
							})}
						</tr>
						<tr>
							{this.state.boardState[3].map(prompt => {
								const row = <EditableLabel text={prompt}></EditableLabel>;
								return <td key={prompt}>{row}</td>;
							})}
						</tr>
						<tr>
							{this.state.boardState[4].map(prompt => {
								const row = <EditableLabel text={prompt}></EditableLabel>;
								return <td key={prompt}>{row}</td>;
							})}
						</tr>
					</tbody>
				</Table>
				<p></p>
				<div className="flex flex-fixed">				
				<div className="center black background-gray fw7 mr1">Just screenshot and share with your friends!</div>
				</div>
				<p></p>
				<div className="flex center"><Button onClick={this.handleSubmitForm}>Submit</Button></div>
				<p></p>
			</div>
		);
	}
}

export default BingoTable;

// import React from 'react';
// import ReactDataGrid from 'react-data-grid';

// class BingoTable extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			rows: [
// 				{ B: 'Empty', I: 'Empty', N: 'Empty', G: 'Empty', O: 'Empty' },
// 				{ B: 'Empty', I: 'Empty', N: 'Empty', G: 'Empty', O: 'Empty' },
// 				{ B: 'Empty', I: 'Empty', N: 'Free Space', G: 'Empty', O: 'Empty' },
// 				{ B: 'Empty', I: 'Empty', N: 'Empty', G: 'Empty', O: 'Empty' },
// 				{ B: 'Empty', I: 'Empty', N: 'Empty', G: 'Empty', O: 'Empty' },
// 			],

// 			columns: [
// 				{ key: 'B', name: 'B', editable: true },
// 				{ key: 'I', name: 'I', editable: true },
// 				{ key: 'N', name: 'N', editable: true },
// 				{ key: 'G', name: 'G', editable: true },
// 				{ key: 'O', name: 'O', editable: true },
// 			],
// 			boardState: [
// 				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 				['Empty', 'Empty', 'Free Space', 'Empty', 'Empty'],
// 				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 				['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
// 			],
// 		};
// 	}

// 	onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
// 		this.setState(state => {
// 			const rows = state.rows.slice();
// 			for (let i = fromRow; i <= toRow; i++) {
// 				rows[i] = { ...rows[i], ...updated };
// 			}
// 			return { rows };
// 		});
// 	};

// 	// componentDidMount() {
// 	// 	// this.setState({
// 	// 	// 	rows: this.state.boardState.map(subArr => {
// 	// 	// 		let newObj = {};
// 	// 	// 		for (let i in this.state.columns) {
// 	// 	// 			newObj[this.state.columns[i].key] = subArr[i++];
// 	// 	// 		}
// 	// 	// 		return newObj;
// 	// 	// 		//return { B: subArr[0], I: subArr[1], N: subArr[2], G: subArr[3], O: subArr[4] };
// 	// 	// 	}),
// 	// 	// });
// 	// }

// 	render() {
// 		console.log(JSON.stringify(this.state.rows));
// 		// return <div>Loading</div>;
// 		return this.state.rows === [] ? (
// 			'Loading...'
// 		) : (
// 			<ReactDataGrid
// 				columns={this.state.columns}
// 				rowGetter={i => this.state.rows[i]}
// 				rowsCount={3}
// 				onGridRowsUpdated={this.onGridRowsUpdated}
// 				enableCellSelect={true}
// 			/>
// 		);
// 		// return (
// 		// <ReactDataGrid
// 		// 	columns={columns}
// 		// 	rowGetter={i => this.state.rows[i]}
// 		// 	rowsCount={3}
// 		// 	onGridRowsUpdated={this.onGridRowsUpdated}
// 		// 	enableCellSelect={true}
// 		// />
// 		// );
// 	}
// }

// export default BingoTable;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDataGrid from 'react-data-grid';
// import './styles.css';

// const columns = [
// 	{ key: 'id', name: 'ID', editable: true },
// 	{ key: 'title', name: 'Title', editable: true },
// 	{ key: 'complete', name: 'Complete', editable: true },
// ];

// const rows = [
// 	{ id: 0, title: 'Task 1', complete: 20 },
// 	{ id: 1, title: 'Task 2', complete: 40 },
// 	{ id: 2, title: 'Task 3', complete: 60 },
// ];

// export default class extends React.Component {
// 	state = { rows };

// 	onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
// 		this.setState(state => {
// 			const rows = state.rows.slice();
// 			for (let i = fromRow; i <= toRow; i++) {
// 				rows[i] = { ...rows[i], ...updated };
// 			}
// 			return { rows };
// 		});
// 	};
// 	render() {
// 		return (
// 			<ReactDataGrid
// 				columns={columns}
// 				rowGetter={i => this.state.rows[i]}
// 				rowsCount={3}
// 				onGridRowsUpdated={this.onGridRowsUpdated}
// 				enableCellSelect={true}
// 			/>
// 		);
// 	}
// }
