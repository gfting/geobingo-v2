import React from 'react';

const prompt = 'Enter Your Bingo Theme';

class BingoTitleForm extends React.Component {
    state = {
        hideTheme: true,
        theme: '',
        rows: 0,
        cols: 0,
    };

    onSubmitThemeForm = e => {
        e.preventDefault();
        this.setState({
            hideTheme: false,
            theme: e.target.elements.theme.value,
            rows: e.target.elements.rows.value,
            cols: e.target.elements.cols.value,
        });
    }

    render() {
        return (
            <div>
                <h1>Your Bingo Theme is: {this.state.theme}</h1>
                <form onSubmit = {this.onSubmitThemeForm}>
                    <input type="text" name="theme"/>
                    <button>{prompt}</button>
                    <input type="number" name="rows"/>
                    <button>{'# of rows'}</button>
                    <input type="number" name="cols"/>
                    <button>{'# of columns'}</button>
                </form>
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
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//         </div>
//       );
//     }
//   }