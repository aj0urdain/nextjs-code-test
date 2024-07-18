'use client';

import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react';
import Radio from '@app/components/atoms/radio';
import type {FC} from 'react';

type RadioGroupProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

/**
 * RadioGroup Component
 *
 * This component renders a group of radio buttons using Headless UI's RadioGroup component.
 * It allows selection from a list of options and highlights the selected option.
 *
 * Props:
 * - options: An array of strings representing the options for the radio group.
 * - selected: The currently selected option.
 * - onChange: A function to handle the change event when a new option is selected.
 */

const RadioGroup: FC<RadioGroupProps> = ({options, selected, onChange}) => (
	<div className="w-full px-4 flex items-center justify-center">
		<div className="mx-auto w-full max-w-md flex items-center justify-center">
			<HeadlessRadioGroup value={selected} className="flex flex-col sm:flex-row gap-6 sm:gap-4" onChange={onChange}>
				{options.map((option) => (
					<Radio
						key={option}
						value={option}
						checked={selected === option}
					/>
				))}
			</HeadlessRadioGroup>
		</div>
	</div>
);

export default RadioGroup;
