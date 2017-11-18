import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import { selectTree, selectPricing } from 'selectors/030'

const BRANCH_SPREAD_ANGLE = 50;

const random = (min, max) => min + (max - min) * Math.random();

const Tree = ({ side, size, branches, level, maxLevel }) => (
  <div
    className={classNames('Project-030-tree', side, `level${level}`)}
    style={{
      fontSize: `${size}em`,
      transform: `scale(${level < maxLevel ? 1 : 0}) rotate(${(side === 'right' ? 1 : -1) * Math.sqrt(1 - size) * BRANCH_SPREAD_ANGLE}deg)`,
    }}
  >
    {branches.length
      ? branches.map((tree, i) => (
          <Tree {...tree} level={level+1} maxLevel={maxLevel} side={i ? 'right' : 'left'} key={i} />
        ))
      : <div
          className="Project-030-leaf"
          style={{
            backgroundColor: `hsl(${random(50, 68)}, ${random(55, 65)}%, ${random(50, 64)}%)`,
            transform: `scale(${level < maxLevel ? 1 : 0}) rotate(-45deg) skewY(-15deg)`,
          }}
        />}
  </div>
)

const Project = ({tree, pricingOptions, pricing, onPricingClick}) => (
  <div className="Project-030">
    <div
      className="Project-030-tree-container abs-center"
      style={{transform: `scale(${(pricing + 2) / 4})`}}
    >
      <Tree side="root" level={0} maxLevel={(pricing+1)*3 - 1} {...tree} />
      <div className="Project-030-pot" />
    </div>
    <div className="Project-030-pricing abs-center">
      {pricingOptions.map((option, i) => (
        <div
          key={option}
          className={classNames('Project-030-pricing-option', {selected: pricing === i})}
          onClick={onPricingClick(i)}
        >{option}</div>
      ))}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  tree: selectTree(state),
  pricing: selectPricing(state),
  pricingOptions: [ 'Free', 'Basic', 'Pro' ],
})

const mapDispatchToProps = (dispatch) => ({
  onPricingClick: (pricing) => () => dispatch({ type: 'CHOOSE_PRICING', pricing }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
