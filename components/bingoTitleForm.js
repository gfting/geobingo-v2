import React from 'react';
import Layout from './layout';

const prompt = 'Enter Your Bingo Theme';
let hideTheme = true;
let theme;

const onSubmitThemeForm = (e) => {
    e.preventDefault();
    theme = e.target.elements.btf.value;
    hideTheme = false;
};

class BingoTitleForm extends React.Component {
    render() {
        return (
            <div>
                {<h1>Your Bingo Theme is: {theme}</h1>}
                <form onSubmit = {onSubmitThemeForm}>
                    <input type="text" name="btf"/>
                    <button>{prompt}</button>
                </form>
            </div>
        );
    }
};


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