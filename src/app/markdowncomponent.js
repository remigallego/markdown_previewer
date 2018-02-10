import React from 'react';
import marked from 'marked';

class MarkdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: example
    };
   this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <textarea className="col-sm-6 form-control" rows="20" cols="50" value={this.state.value} onChange={this.handleChange}/>

        <div className="col-sm-6" id="text-marked"></div>
        </div>

    </div>
    )
  }

  componentDidMount(){
    this.setInnerHTML();
    }

    handleChange(event){
    this.setState({value: event.target.value});
    this.setInnerHTML();
    }

    setInnerHTML(){
    let doc = document.getElementById('text-marked');
    doc.innerHTML = marked(this.state.value);
    return doc.innerHTML;
    }
}

module.exports = MarkdownComponent;

const example = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;
