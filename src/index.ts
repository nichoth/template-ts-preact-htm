import { html } from 'htm/preact'
import { createDebug } from '@nichoth/debug'

const debug = createDebug()

export function Example () {
    debug('rendering...')
    return html`<div>hello</div>`
}
