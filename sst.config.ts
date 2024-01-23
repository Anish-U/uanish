import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'uanish',
			region: 'us-west-1',
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new NextjsSite(stack, 'site', {
				customDomain: {
					domainName: 'uanish.me',
					domainAlias: 'www.uanish.me',
				},
			});

			stack.addOutputs({
				SiteUrl: site.url,
			});
		});
	},
} satisfies SSTConfig;
