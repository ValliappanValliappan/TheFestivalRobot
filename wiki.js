const wiki=require('wikipedia');
(async () => {
	try {
		const page = await wiki.page('List of multinational festivals and holidays');
		const cats = await page.categories();
		console.log(cats);
	} catch (error) {
		console.log(error);
	}
})();