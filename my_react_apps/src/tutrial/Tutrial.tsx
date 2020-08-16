import React from 'react'
// import ReactDOM from 'react-dom'

import './Tutrial.css'
import { DetailProps } from './TutrialTypes'

class Detail extends React.Component<DetailProps, {}> {
    render() {
      return (
        <div >
          <div className="classification-name">{this.props.classification.name}</div>
          <div className="description">{this.props.classification.description}</div>
          <div className="unit-price">{this.props.classification.unitPrice}</div>
          <div className="num-people">
            <select value={this.props.classification.numOfPeople}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span>名</span>
          </div>
        </div>
      );
    }
  }
  
  class Summary extends React.Component {
    render() {
      return (
        <div>
          <div className="party">
            <input type="text" className="party" value="0" />
            <span>名様</span>
          </div>
          <div className="total-amount">
            <span>合計</span>
            <input type="text" className="total-amount" value="0" />
            <span>円</span>
          </div>
        </div>
      );
    }
  }
  
  class AdmissionFeeCalculator extends React.Component {
    render() {
      return (
        <>
          <Detail />
          <Summary />
        </>
      );
    }
  }

export default AdmissionFeeCalculator
  
//   const App: React.FC = () => {
//     return (
//       <div className="main">
//         <AdmissionFeeCalculator />
//       </div>
//     );
//   }
  
//   ReactDOM.render(<App />, document.querySelector(".container"));

