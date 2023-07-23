// import { LibraryModule } from '../../../library/src/public-api';
import { LibraryModule } from '@scope/your-library-name';
import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

const setup = async () => {
	const view = render(AppComponent, {
		imports: [LibraryModule],
	});

	return {
		view,
	};
};
describe('AppComponent', () => {
	test('default', async () => {
		await setup();

		expect(screen.getByText('my library component')).toBeInTheDocument();
	});
});
