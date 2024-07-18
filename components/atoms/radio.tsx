import type {FC} from 'react';
import {Radio as HeadlessRadio} from '@headlessui/react';

type RadioProps = {
  value: string;
  checked: boolean;
};

/**
 * Radio Component
 *
 * This component renders a radio button using Headless UI's Radio component.
 * It displays the provided value and applies specific styles based on whether
 * it is checked or not.
 *
 * Props:
 * - value: The label for the radio button.
 * - checked: A boolean indicating whether the radio button is selected.
 */

const Radio: FC<RadioProps> = ({value, checked}) => (
	<HeadlessRadio
		as="div"
		value={value}
		className={`cursor-pointer rounded-full px-6 py-3 text-xs w-64 sm:w-full text-center md:text-sm focus:outline-none transition font-bold border
      ${checked ? 'bg-black text-white border-transparent' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-300'}`}
	>
		{value}
	</HeadlessRadio>
);

export default Radio;
