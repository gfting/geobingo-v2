import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const prompt = 'Enter Your Bingo Theme';

class BingoTitleForm extends React.Component {
    state = {
        hideTheme: true,
        theme: 'Untitled Bingo Game',
        rows: 5,
        cols: 5,
        redirect: false,
    };

    onSubmitThemeForm = e => {
        e.preventDefault();
        this.setState({
            hideTheme: false,
            theme: e.target.elements.theme.value,
            rows: e.target.elements.rows.value,
            cols: e.target.elements.cols.value,
            redirect: true,
        });
    }

    onTitleChange = e => {
        e.preventDefault();
        this.setState({
            theme: e.target.value,
        });
    }

    onRowChange = e => {
        e.preventDefault();
        this.setState({
            rows: e.target.value,
        });
    }

    onColChange = e => {
        e.preventDefault();
        this.setState({
            cols: e.target.value,
        });
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/test2' />;
        }

        return (
            <div>
                <h1>Your Bingo Theme is: {this.state.theme}</h1>
                <h4 style = {{color: "SlateGray"}}>This Bingo will have {this.state.rows * this.state.cols} entries.</h4>
                <Form onSubmit = {this.onSubmitThemeForm}>
                    <Form.Label>{prompt}</Form.Label>
                    <Form.Control type="text" name="theme" placeholder="Custom Theme" onChange = {this.onTitleChange}/>
                    <Form.Label>{'# of rows'}</Form.Label>
                    <Form.Control type="number" name="rows" defaultValue="5" onChange = {this.onRowChange}/>
                    <Form.Label>{'# of columns'}</Form.Label>
                    <Form.Control type="number" name="cols" defaultValue="5" onChange = {this.onColChange}/>
                    <br/>
                    <Button variant="primary" type = "submit">
                    Submit
                    </Button>
                </Form>
            </div>
        );
    }
}


export default BingoTitleForm;

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.hide = true;
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       //alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//       this.setState({hide: false});
//       this.render();
//     }
  
//     render() {
//       return (
//           <div>
//         <h1>{!this.hide && theme}</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <Form.Control type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <Form.Control type="submit" value="Submit" />
//         </form>
//         </div>
//       );
//     }
//   }