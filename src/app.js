import {div, h1, button} from '@cycle/dom'
import xs from 'xstream'
import _ from 'lodash'
import {animals} from './animals'
import {adjectives} from './adjectives'

export function App (sources) {

  function randomAnimal() {
    var animal = _.sample(animals);
    var adjective = _.chain(adjectives)
      .filter(a => a.startsWith(animal.charAt(0)))
      .sample()
      .value()

    return `${adjective} ${animal}s`
  }

  const click$ = sources.DOM.select('.get-next-animal')
    .events('click')
    .map(() => randomAnimal());

  const animal$ = click$.startWith(randomAnimal());

  const vtree$ = animal$.map(animal =>
    div('.container', [
      h1('.animal-name', animal),
      button('.get-next-animal', 'Next animal')
    ])
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
