// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: headImageUrl, headsCount: 0, tailsCount: 0}

  onClickCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let finalTossImage = ''
    let countHeads = headsCount
    let countTails = tailsCount
    if (tossResult === 0) {
      finalTossImage = headImageUrl
      countHeads += 1
    } else {
      finalTossImage = tailImageUrl
      countTails += 1
    }
    this.setState({
      tossImage: finalTossImage,
      headsCount: countHeads,
      tailsCount: countTails,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="coin-image" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickCoinToss}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total-count">Total: {totalCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
