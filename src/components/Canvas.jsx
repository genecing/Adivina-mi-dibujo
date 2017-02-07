import React from 'react';
import { SketchPad, TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../../node_modules/react-sketchpad/lib/index';
import {Row, Col} from 'react-bootstrap';
import Log from './Log';

class Canvas extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        tool:TOOL_PENCIL,
        size: 2,
        color: '#000000',
        fill: false,
        fillColor: '#444444',
        items: []
      }
  }


  addItem(item){
    var items = this.state.items;
    items.push(item);
    //Cada vez que se llama a setState se renderiza el componente
    this.setState({items:items})
  }


  render() {
  	const { tool, size, color, fill, fillColor, items } = this.state;
    return (
      <div>
        <h1 id="title" >Adivina mi dibujo</h1>
        <div className="container">
          <Row>
            <Col id="tools" sm={2}>
              <button
                className={tool == TOOL_PENCIL  ? 'tool-active' : 'tool'}
                onClick={()=> this.setState({tool:TOOL_PENCIL})}
                >Lápiz
              </button>
              <button
                className={tool == TOOL_LINE ? 'tool-active': 'tool'}
                onClick={()=> this.setState({tool:TOOL_LINE})}
                >Linea
              </button>
              <button
                className={tool == TOOL_RECTANGLE ? 'tool-active':'tool'}
                onClick={()=> this.setState({tool:TOOL_RECTANGLE})}
                >Rectángulo
              </button>
              <button
                className={tool == TOOL_ELLIPSE ? 'tool-active':'tool'}
                onClick={()=> this.setState({tool:TOOL_ELLIPSE})}
                >Elipse
              </button>
              <div className="options" style={{marginBottom:20}}>
                <label htmlFor="">size: </label>
                <input min="1" max="20" type="range" value={size} onChange={(e) => this.setState({size: parseInt(e.target.value)})} />
              </div>
              <div className="options" style={{marginBottom:20}}>
                <label htmlFor="">color: </label>
                <input type="color" value={color} onChange={(e) => this.setState({color: e.target.value})} />
              </div>
              
              {(this.state.tool == TOOL_ELLIPSE || this.state.tool == TOOL_RECTANGLE) ?
                <div>
                  <label htmlFor="">fill in:</label>
                  <input type="checkbox" value={fill} style={{margin:'0 8'}}
                         onChange={(e) => this.setState({fill: e.target.checked})} />
                  {fill ? <span>
                      <label htmlFor="">with color:</label>
                      <input type="color" value={fillColor} onChange={(e) => this.setState({fillColor: e.target.value})} />
                    </span> : ''}
                </div> : ''}


            </Col>
          	<Col id="board" sm={6}>
        	  	<SketchPad
          			width={450}
                height={400}
                animate={true}
                size={size}
                color={color}
                fillColor={fill ? fillColor : ''}
                items={items}
                tool={tool}
                onCompleteItem={(item) => this.addItem(item)}
        		  />
          	</Col>
          	<Col id="log" sm={4}>
          		<Log/>
          	</Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Canvas;