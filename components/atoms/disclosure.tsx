import type {FC} from 'react';
import React from 'react';
import {Disclosure as HeadlessDisclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';

type DisclosureProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

/**
 * Disclosure Component
 *
 * This component renders a disclosure panel using Headless UI's Disclosure component.
 * It displays a question, and when clicked, reveals the answer. The disclosure state
 * (open/closed) is managed through props.
 *
 * Props:
 * - question: The question to be displayed in the disclosure button.
 * - answer: The answer to be revealed in the disclosure panel.
 * - isOpen: A boolean indicating whether the disclosure is open by default.
 * - onToggle: A function to handle the toggle action of the disclosure button.
 */

const Disclosure: FC<DisclosureProps> = ({question, answer, isOpen = false, onToggle}) => (
	<HeadlessDisclosure defaultOpen={isOpen}>
		{({open}) => (
			<React.Fragment>
				<DisclosureButton
					className={`${open ? 'border-none' : 'border-b'} border-gray-300 flex justify-between items-center w-full px-4 py-4 text-xl font-medium text-left text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75`}
					onClick={onToggle}
				>
					<span>{question}</span>
					<ChevronUpIcon
						className={`${open ? 'transform rotate-180' : ''} duration-200 w-5 h-5 text-gray-500`}
					/>
				</DisclosureButton>
				<DisclosurePanel className={`${open ? 'border-b' : 'border-none'} duration-300 animate-slideInFromTop px-4 pb-4 text-sm text-gray-500`}>
					{answer}
				</DisclosurePanel>
			</React.Fragment>
		)}
	</HeadlessDisclosure>
);

export default Disclosure;
