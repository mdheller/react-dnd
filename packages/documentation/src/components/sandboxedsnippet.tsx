import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactMarkdown from 'react-markdown'
import Sandbox from './sandbox'
import 'react-tabs/style/react-tabs.css'

export interface ExampleTabsProps {
	name: string
}

const frameStyle: React.CSSProperties = {
	width: '100%',
	height: 800,
	border: 0,
	borderRadius: 4,
	overflow: 'hidden',
}

const jsUrl = (name: string) =>
	`https://codesandbox.io/embed/github/react-dnd/react-dnd/tree/docs/sandboxed_tutorial_steps/packages/documentation/sandboxes/${name}?fontsize=14`

const ExampleTabs: React.FC<ExampleTabsProps> = ({ name, children }) => {
	const url = jsUrl(name)
	const script = `${children[0]}`
	return (
		<Tabs>
			<TabList>
				<Tab>Code</Tab>
				<Tab>Sandbox</Tab>
			</TabList>
			<TabPanel>
				<ReactMarkdown source={script} />
			</TabPanel>
			<TabPanel>
				<Sandbox name={name} />
			</TabPanel>
		</Tabs>
	)
}

export default ExampleTabs
