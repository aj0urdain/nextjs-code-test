'use client';

import type {FC} from 'react';
import {useState} from 'react';
import RadioGroup from '@app/components/molecules/radio-group';
import Disclosure from '@app/components/atoms/disclosure';
import type {FAQData} from '@app/data/faq-data';

type FAQSectionProps = {
  faqData: FAQData;
};

/**
 * FAQSection Component
 *
 * This component renders a section containing FAQ panels and disclosures.
 * It allows users to switch between different panels (Students, Teachers, Businesses)
 * and view corresponding FAQ blocks. The first disclosure in each panel is opened by default.
 *
 * Props:
 * - faqData: The data structure containing FAQ information.
 */

const FAQSection: FC<FAQSectionProps> = ({faqData}) => {
	const [selectedPanel, setSelectedPanel] = useState(faqData.panels[0].label);
	const [openDisclosureId, setOpenDisclosureId] = useState<number | undefined>(faqData.panels[0].blocks[0].id);

	const onPanelChange = (panel: string): void => {
		setSelectedPanel(panel);
		const panelData = faqData.panels.find(p => p.label === panel);

		if (panelData) {
			setOpenDisclosureId(panelData.blocks[0].id);
		}
	};

	const handleToggle = (id: number): void => {
		setOpenDisclosureId(id === openDisclosureId ? undefined : id);
	};

	const currentPanel = faqData.panels.find(panel => panel.label === selectedPanel);

	return (
		<div className="w-full flex-col items-center justify-center">
			<h2 className="text-center text-xl font-bold mb-8">{faqData.heading}</h2>
			<RadioGroup
				options={faqData.panels.map(panel => panel.label)}
				selected={selectedPanel}
				onChange={onPanelChange}
			/>
			<div
				key={currentPanel?.label}
				className="animate-slideInFromTop mt-12 grid grid-cols-1 xl:grid-cols-2 gap-x-12 w-full max-w-full mx-auto"
			>
				<div className="">
					{currentPanel?.blocks.slice(0, Math.ceil(currentPanel.blocks.length / 2)).map((block) => (
						<Disclosure
							key={block.id}
							question={block.question}
							answer={block.answer}
							isOpen={openDisclosureId === block.id}
							// eslint-disable-next-line react/jsx-handler-names
							onToggle={() => { handleToggle(block.id); }}
						/>
					))}
				</div>
				<div className="">
					{currentPanel?.blocks.slice(Math.ceil(currentPanel.blocks.length / 2)).map((block) => (
						<Disclosure
							key={block.id}
							question={block.question}
							answer={block.answer}
							isOpen={openDisclosureId === block.id}
							// eslint-disable-next-line react/jsx-handler-names
							onToggle={() => { handleToggle(block.id); }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
