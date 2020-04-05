import React from 'react';
import Table from 'react-bootstrap/Table';

class BingoTable extends React.Component {
    state = {
        list: [],
        maxLength: 24,
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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <input type="text" placeholder="Add Your Ideas Here" name="prompt"/>
                    <button>Add Option</button>
                </form>
                <Table>
                    <tbody>
                    <tr>
                    {this.state.list.map((prompt)=> {
                        return <td key={prompt}>{prompt}</td>;
                    })}
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default BingoTable;