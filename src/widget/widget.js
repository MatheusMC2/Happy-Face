import { getColorIterator } from "./utils/colors/color.js"
import sample1 from "./examples/widget06.js"
import sample2 from "./examples/widget03.js"
import shape from "./utils/shape/shape.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)
    sample1(key,draw)
    sample2(key,draw)

    // Descomente linha abaixo para ver exemplo 0

    for()
    let elem = shape(key.next())
    elem.size(300,300).move(100,100).fill("green").opacity(0.5)
    elem.addTo(draw)
}

export default widget