import React from 'react';
import Table from 'react-bootstrap/Table';
import EditableLabel from 'react-inline-editing';

class BingoTable extends React.Component {
    state = {
        list: [['Empty','Empty','Empty','Empty','Empty'],['Empty','Empty','Empty','Empty','Empty'],['Empty','Empty','Free Space','Empty','Empty'],['Empty','Empty','Empty','Empty','Empty'],['Empty','Empty','Empty','Empty','Empty']],
        maxLength: 24,
        testlist: []
    }

    handleSubmitForm = event => {
        event.preventDefault();

        const prompt = event.target.elements.prompt.value.trim();
        //list.push(prompt);
            this.setState ({
                list: [...this.state.list, prompt],
                maxLength: 24,
            });
    }

    handleClick = e => {
        e.preventDefault();
        alert(e.target.elements.option.value);
    }

    render() {
        return (
            <div>
                <Table striped bordered variant="light">
                    <tbody>
                    <tr>
                    {this.state.list[0].map((prompt)=> {
                        const row = <EditableLabel text={prompt}></EditableLabel>;
                        return <td key="1">{row}</td>;
                        // const row = <EditableLabel text={prompt}></EditableLabel>;
                        // return <button key="0" onDoubleClick={this.handleClick}>{<td key="0">{row}</td>}</button>;
                    })}
                    </tr>
                    <tr>
                    {this.state.list[1].map((prompt)=> {
                        const row = <EditableLabel text={prompt}></EditableLabel>;
                        return <td key="1">{row}</td>;
                    })}
                    </tr>
                    <tr>
                    {this.state.list[2].map((prompt)=> {
                        const row = <EditableLabel text={prompt}></EditableLabel>;
                        return <td key="2">{row}</td>;
                    })}
                    </tr>
                    <tr>
                    {this.state.list[3].map((prompt)=> {
                        const row = <EditableLabel text={prompt}></EditableLabel>;
                        return <td key="3">{row}</td>;
                    })}
                    </tr>
                    <tr>
                    {this.state.list[4].map((prompt)=> {
                        const row = <EditableLabel text={prompt}></EditableLabel>;
                        return <td key="4">{row}</td>;
                    })}
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default BingoTable;