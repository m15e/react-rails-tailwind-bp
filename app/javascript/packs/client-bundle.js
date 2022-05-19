import ReactOnRails from 'react-on-rails'

import Main from '../bundles/frontEnd/pages/Main'
import Demo from '../bundles/frontEnd/pages/Demo'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
	Main,
	Demo,
})
