import React from 'dom-chef';

export default function createDropdownItem(label: string, url: string, attributes?: Record<string, string>): Element {
	return (
		<li {...attributes}>
			<a role="menuitem" className="dropdown-item" href={url}>
				{label}
			</a>
		</li>
	);
}
