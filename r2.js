/* global browser, by, expectedUrl, timeout, element, expect, protractor */

/**
 * @file
 *  Steps
 *
 * Provide step functions for functional testing.
 * This file is created and modified automatically by the Gherkin compiler.
 *
 * Note, therefore, that most of this file might be changed automatically
 * when you run the compiler again. This @file header will not be affected,
 * but all of the function header comments are (re)generated automatically.
 * Methods within the R2_steps object function are not indented -- do not change that!
 * The last character in this file must be the object function's closing brace (}).
 *
 * Be assured that no functions will be deleted and the compiler will
 * not alter code within a function unless you make it look like a function header.
 *
 * You may also add statements just below this header.
 */

(function () {
	var R2_steps = function () {
		this.v = []; // miscellaneous data
		this.v.parse = '';
		var wait = 20000;
		var count = 0;
		var EC = protractor.ExpectedConditions;
		/**
		 * Add additional setup for any or all features or tests
		 */
		this.extraSetup = function () {
			browser.getSession().then(function (session) {
				console.log('SessionID=' + session.getId());
			});
			browser.driver.get("http://localhost:8100/#/app/login", 500);
//			browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function () {
//				var button = element(by.id('scan'));
//				var isClickable = EC.elementToBeClickable(button);
//				browser.driver.wait(isClickable, 7000); //wait for an element to become clickable
//				browser.driver.wait(button.click(), 7000);
//			});
		};
		/**
		 * we scan QR (ARG)
		 * in: MAKE ParseQRCode WeScanAValidOldPersonalCard
		 *     MAKE ParseQRCode WeScanAValidOldCompanyCard
		 *     MAKE ParseQRCode WeScanAValidPersonalCard
		 *     MAKE ParseQRCode WeScanAValidCompanyCard
		 */
		var del = .5;
		this.weScanPersonalQR = function (qr) {
			this.v['qr'] = qr;
//			if (qr.substr(-16, 1) === 'H'||qr.substr(-16, 1) === '-') {
			var parts = qr.split(/[/\\.-]/);
			console.log(parts[5].length, qr.indexOf('HTTP://'));
			browser.wait(browser.executeScript("document.getElementById('scan').click();"), wait)
				.then(function () {
					if (parts[5].length <= 4) {
						browser.wait(element(by.id('oldURL')).click(), wait);
					} else if (qr.indexOf('HTTP://') !== -1) {
						browser.wait(element(by.id('newURL')).click(), wait);
					}
				})
				.then(function () {
					console.log("document.getElementById('" + qr + "').click();");
					element(by.id("customQR")).sendKeys(qr);
					var link = element(by.id("accountInfoButton"));
					var isClickable = EC.elementToBeClickable(link);
					browser.wait(isClickable, wait)
						.then(link.click());
					console.log('weScanQR');
				})
				.then(browser.executeScript('return window.find("isCompany:true");'))
				.then(function () {
					browser.wait(browser.driver.get("https://otherrealm.org"), wait)
						.then(browser.wait(browser.driver.get("http://localhost:8100/#/app/home"), wait))
						.then(browser.wait(browser.executeScript("document.getElementById('scan').click();"), wait))
						.then(function () {
							element(by.id("customQR")).sendKeys('H6VM010WeHlioM5JZv1O9G');
							var link = element(by.id("demoAccountLogin"));
							var isClickable = EC.elementToBeClickable(link);
							browser.wait(isClickable, wait)
								.then(link.click());
						}).then(browser.wait(browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
						.then(function () {
							var button = element(by.id('scan'));
							var isClickable = EC.elementToBeClickable(button);
							browser.driver.wait(isClickable, wait); //wait for an element to become clickable
							browser.driver.wait(button.click(), wait);
						}), wait))
						.then(function () {
							element(by.id("customQR")).sendKeys(qr);
							var link = element(by.id("accountInfoButton"));
							var isClickable = EC.elementToBeClickable(link);
							browser.wait(isClickable, wait)
								.then(link.click());
						});
					return expect(browser.wait(EC.textToBePresentInElement(element(by.id("url")), qr), wait)).toBe(true);
				});
		};
		this.weScanCompanyQR = function (qr) {
			this.v['qr'] = qr;
//			if (qr.substr(-16, 1) === 'H'||qr.substr(-16, 1) === '-') {
			var parts = qr.split(/[/\\.-]/);
			console.log(parts[5].length, qr.indexOf('HTTP://'));
			browser.wait(browser.executeScript("document.getElementById('scan').click();"), wait)
				.then(function () {
					if (parts[5].length <= 4) {
						browser.wait(element(by.id('oldURL')).click(), wait);
					} else if (qr.indexOf('HTTP://') !== -1) {
						browser.wait(element(by.id('newURL')).click(), wait);
					}
				})
				.then(function () {
					console.log("document.getElementById('" + qr + "').click();");
					element(by.id("customQR")).sendKeys(qr);
					var link = element(by.id("accountInfoButton"));
					var isClickable = EC.elementToBeClickable(link);
					browser.wait(isClickable, wait)
						.then(link.click());
					console.log('weScanQR');
				})
				.then(browser.executeScript('return window.find("isCompany:true");'))
				.then(function () {
					return expect(browser.wait(EC.textToBePresentInElement(element(by.id("url")), qr), wait)).toBe(true);
				});

		};
		this.accountIsPersonal = function () {
			return expect(browser.wait(EC.textToBePresentInElement(element(by.id("isPersonal")), 'true'), wait)).toBe(true);
		};
		/**
		 * account is company
		 *
		 * in: TEST ParseQRCode WeScanAValidOldCompanyCard
		 *     TEST ParseQRCode WeScanAValidCompanyCard
		 */
		this.accountIsCompany = function () {
//			browser.driver.wait(EC.textToBePresentInElement(element(by.id("isPersonal")),'false'),10000);
			return expect(browser.wait(EC.textToBePresentInElement(element(by.id("isCompany")), 'true'), wait)).toBe(true);
		};
		/**
		 * account ID is (ARG)	 *
		 * in: TEST ParseQRCode WeScanAValidOldPersonalCard
		 *     TEST ParseQRCode WeScanAValidOldCompanyCard
		 *     TEST ParseQRCode WeScanAValidPersonalCard
		 *     TEST ParseQRCode WeScanAValidCompanyCard
		 */
		this.accountIDIs = function (id) {
//			browser.driver.wait(EC.textToBePresentInElement(element(by.id("memberId")),'false'),10000);
			return expect(browser.driver.wait(EC.textToBePresentInElement(element(by.id("memberId")), id), wait)).toBe(true);
		};
		/**
		 * security code is (ARG)
		 * in: TEST ParseQRCode WeScanAValidOldPersonalCard
		 *     TEST ParseQRCode WeScanAValidOldCompanyCard
		 *     TEST ParseQRCode WeScanAValidPersonalCard
		 *     TEST ParseQRCode WeScanAValidCompanyCard
		 */
		this.securityCodeIs = function (securityCode) {
//			browser.driver.wait(EC.textToBePresentInElement(element(by.id("unencryptedCode")),'false'),10000);
			return expect(browser.driver.wait(EC.textToBePresentInElement(element(by.id("unencryptedCode")), securityCode), wait)).toBe(true);
		};
		/**
		 * show page (ARG)
		 *
		 * in: MAKE Transact Setup
		 *     TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showPage = function (p) {
//			browser.driver.get("http://localhost:8100/#/app/home", 500);
//			browser.driver.get("http://localhost:8100/#/app/login", 500);
			browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function () {
				var button = element(by.id('scan'));
				var isClickable = EC.elementToBeClickable(button);
				browser.driver.wait(isClickable, wait); //wait for an element to become clickable
				button.click();
			});
			element(by.id("customQR")).sendKeys('H6VM010WeHlioM5JZv1O9G');
			var exp;
			var link = element(by.id("demoAccountLogin"));
			var isClickable = EC.elementToBeClickable(link);
			browser.wait(isClickable, wait)
				.then(link.click());
//			.then(exp=expect(browser.wait(EC.urlContains(p), 5000)));
			return expect(browser.wait(EC.urlContains(p.toLowerCase()), wait)).toBe(true);
		};
		/**
		 * show button (ARG)
		 *
		 * in: TEST Transact Setup
		 *     TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showButton = function (arg1) {
			var button = expect(element(by.cssContainingText('.button', arg1)).getText()).toEqual(arg1);
			return browser.wait(button, wait);
		};
		/**
		 * show back button (ARG)
		 *
		 * in: TEST Transact Setup
		 *     TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showBackButton1 = function (arg1) {
			var back = $('button.back-button');
			browser.wait(EC.presenceOf(back), wait);
			return expect(back.getText()).toContain(arg1);
		};
		this.showBackButton2 = function (arg1) {
			var back = element(by.css('#bB > span.back-text > span.default-title:nth-child(1)'));
			browser.wait(EC.presenceOf(back), wait);
			return expect(back.getText()).toContain(arg1);
		};
		/**
		 * button (ARG) pressed
		 *
		 * in: MAKE Transact WeIdentifyAndChargeACustomer
		 */
		this.buttonPressed = function (arg1) {
			var button = element(by.cssContainingText('button', arg1.toString())).getText();
			var link = element(by.cssContainingText('button', arg1.toString())).getText();
			var isClickable = EC.or(EC.elementToBeClickable(link), EC.elementToBeClickable(button));
			browser.wait(isClickable, 8000);
			link.click();
			return isClickable;
		};
		/**
		 * show scanner
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showScanner = function () {
			return expect(browser.driver.wait(EC.or(EC.urlContains('demo-people'), EC.urlContains('qr')), 9000)).toBe(true);
		};
		/**
		 * scanner sees QR (ARG)
		 *
		 * in: MAKE Transact WeIdentifyAndChargeACustomer
		 */
		this.scannerSeesQR = function (arg1) {
			var QR = element(by.id("customQR"));
			QR.sendKeys(arg1);
			var link = element(by.id("demoAccountLogin"));
			var isClickable = EC.elementToBeClickable(link);
			browser.wait(isClickable, wait)
				.then(link.click())
				.then(function () {
					return browser.wait(expect(element(by.id("url")).getText()).toEqual('url:' + arg1), wait);
				});
		};
		/**
		 * show photo of member (ARG)
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer 
		 */
		this.showPhotoOfMember = function (arg1) {
			return expect(browser.driver.wait(element(by.id('ItemPreview')).isPresent(), wait)).toBe(true);
		};
		/**
		 * show text (ARG)
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showText = function (arg1) {
			return  expect(browser.wait(EC.textToBePresentInElement(element(by.id('customerPage')), arg1), wait)).toBe(true);
		};
		/**
		 * show number keypad
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showNumberKeypad = function () {
			return  expect(browser.driver.wait(element(by.id('keypad')).isPresent(), wait)).toBe(true);
		};
		/**
		 * show amount (ARG)
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showAmount = function (arg1) {
			return expect(browser.driver.wait(element(by.id('displayAmount')).getText(), wait)).toEqual(arg1.toString());
		};
		/**
		 * show dropdown with (ARG) selected
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showDropdownWithSelected = function (arg1) {
			return true; //browser.driver.wait(EC.textToBePresentInElementValue(by.id('category'), arg1), wait);
		};
		/**
		 * show (ARG) message (ARG) titled (ARG)
		 *
		 * in: TEST Transact WeIdentifyAndChargeACustomer
		 */
		this.showMessageTitled = function (arg1, arg2, arg3) {
			return true;
		};
		/**
		 * message button (ARG) pressed
		 *
		 * in: MAKE Transact WeIdentifyAndChargeACustomer
		 */
		this.messageButtonPressed = function (arg1) {
			return true;
		};
	};
	module.exports = function () {
		return new R2_steps();
	};
}());
