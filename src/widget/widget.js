import { getColorIterator } from "./utils/colors/color.js"
import sample1 from "./examples/widget06.js"
import sample2 from "./examples/widget03.js"

function widget(key, draw) {
    
    sample1(key,draw)
    sample2(key,draw)
    let nextColor = getColorIterator(key)


    // Descomente linha abaixo para ver exemplo 0

}

export default widget