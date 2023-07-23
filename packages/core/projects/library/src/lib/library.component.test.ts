import { render, screen } from '@testing-library/angular';

import { LibraryComponent } from './library.component';

const setup = async () => {
	const view = render(LibraryComponent);

	return {
		view,
	};
};
describe('LibraryComponent', () => {
	test('default', async () => {
		await setup();

		expect(screen.getByText('my library component')).toBeInTheDocument();
	});
});
