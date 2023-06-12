import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { WrappedTldrawEditor } from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<WrappedTldrawEditor />
	</React.StrictMode>
)

// eslint-disable-next-line no-console
console.log('Hi from editor process!')
