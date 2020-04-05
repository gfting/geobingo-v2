import React from 'react';
import EditableLabel from 'react-inline-editing';

const defaultTitle = 'Double Click to Insert';
class BingoCell extends React.Component {
    state = {
        value: defaultTitle,
        editMode: false,
    }
    handleForm = e => {
        e.preventDefault();
        alert('Form Submitted');
        const answer = e.target.elements.prompt.value.trim();
        if(answer) {
            this.setState ({
                value: answer,
                editMode: false,
            });
        }
    }
    handleDoubleClick = e => {
        this.setState ({
            editMode: true,
        });
    }
    render() {
        return (
            <div>
            <EditableLabel text=''
            labelClassName='myLabelClass'
            inputClassName='myInputClass'
            inputWidth='200px'
            inputHeight='25px'
            inputMaxLength='50'
            labelFontWeight='bold'
            inputFontWeight='bold'/>
            <button onDoubleClick={this.handleDoubleClick}>
                {this.state.value}
                
            </button>
            </div>
        );
    }
}

export default BingoCell;