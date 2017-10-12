import { Parser } from 'expr-eval'

const parser = new Parser()

const steps = 100

const calculatePoints = domain => expr =>
  Array(steps + 1)
    .fill(0)
    .map((_, x) => domain[0] + (domain[1] - domain[0]) * x / steps)
    .map(x => ({x, y: expr.evaluate({x})}))

const initialState = {
  description: '',
  expression: null,
  points: [],
  domain: [-1, 1],
  codomain: [-1, 1]
}

const plotReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PLOT':
      const res = {
        ...state,
        description: action.description
      }

      let expression, points

      try {
        expression = parser.parse(action.description)
      } catch (e) {
        expression = null
      }

      if (expression) {
        res.expression = expression

        try {
          points = calculatePoints(state.domain)(expression)
        } catch (e) {
          points = []
        }

        if (points.length) {
          res.points = points
          res.domain = [Math.min(...points.map(({x}) => x)), Math.max(...points.map(({x}) => x))]
          res.codomain = [Math.min(...points.map(({y}) => y)), Math.max(...points.map(({y}) => y))]
        }
      }

      return res
    default:
      return state
  }
}

export default plotReducer
