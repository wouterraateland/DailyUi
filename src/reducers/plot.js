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

          const yValues = points
            .map(({y}) => y)
            .filter(y => !isNaN(y) && y !== Infinity && y !== -Infinity)

          //res.domain = [Math.min(...points.map(({x}) => x)), Math.max(...points.map(({x}) => x))]
          res.codomain = [Math.min(...yValues), Math.max(...yValues)]
          if (res.codomain[1] === res.codomain[0]) {
            res.codomain[1] += 1
            res.codomain[0] -= 1
          }
        }
      }

      return res
    default:
      return state
  }
}

export default plotReducer
