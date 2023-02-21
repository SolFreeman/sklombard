$(window).on('load resize', function () {
	if ($(window).width() < 768) {
		$('.benefis__slider:not(.slick-initialized)').slick({
			dots: true,
			infinite: true,
			speed: 100,
			slidesToShow: 1
		});
	} else {
		$(".benefis__slider.slick-initialized").slick("unslick");
	}
});
jQuery(document).ready(function ($) {
	faqAccordeon();
	inputFileCustom();
	listCategory();
	tooltip();
	$(".fancybox").fancybox();
	// $('.nice_Select').niceSelect();
	initSearchFormSwitcher();
	resizeBlock();
	subMenuNavigation();
	$(".js-select2").select2({
		closeOnSelect: false,
		placeholder: "Комплектація",
		// allowHtml: true,
		allowClear: true,
		tags: true // создает новые опции на лету
	});
	$(".select_single").select2({
		theme: 'single'
	});
	modalOpen();
	if ($(window).width() < 768) {
		loadMore();
	}



	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});



	function modalOpen() {
		let overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
		let open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
		let close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
		let modal = $('.modal_div'); // все скрытые мoдaльные oкнa

		open_modal.click(function (event) { // лoвим клик пo ссылке с клaссoм open_modal
			event.preventDefault(); // вырубaем стaндaртнoе пoведение
			let div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
			overlay.fadeIn(400, //пoкaзывaем oверлэй
				function () { // пoсле oкoнчaния пoкaзывaния oверлэя
					$(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
						.css('display', 'block')
						.animate({ opacity: 1, top: '50%' }, 200); // плaвнo пoкaзывaем
				});
		});

		close.click(function () { // лoвим клик пo крестику или oверлэю
			modal // все мoдaльные oкнa
				.animate({ opacity: 0, top: '45%' }, 200, // плaвнo прячем
					function () { // пoсле этoгo
						$(this).css('display', 'none');
						overlay.fadeOut(400); // прячем пoдлoжку
					}
				);
		});
	}




	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});

	$(function () {
		$(".muve-top").click(function () {
			var top = $(".thetop").offset().top;
			$('html, body').animate({
				scrollTop: top
			}, 3000, 'easeOutExpo');
			return false
		})
	})

	if ($('.post-item img').length || $('.seo-block img').length) {
		$('.post-item img, .seo-block img').each(function () {
			var imgThis = $(this);
			if (!imgThis.hasClass("nofancy")) {
				if (imgThis.closest('a')) {
					imgThis.closest('a').attr({
						'data-fancybox': 'content-group',
						//'href': $(this).attr('src'),
					});
				};
			};
		});
	};

	if ($('.post-item iframe').length) {
		$('.post-item iframe').closest('p').addClass('iframe-box')
	}

	var nav = $('.language-title');
	var selection = $('.language-list');
	var select = selection.find('li');

	nav.click(function (event) {
		if (nav.hasClass('active')) {
			nav.removeClass('active');
			selection.stop().slideUp(200);
		} else {
			nav.addClass('active');
			selection.stop().slideDown(200);
		}
		event.preventDefault();
	});

	select.click(function (event) {
		select.removeClass('active');
		$(this).addClass('active');
		var $lang = $(this).text();
		nav.text($lang);
		nav.trigger('click');
	});

	let navOpener = document.querySelector('.js-nav-opener');
	let header = document.querySelector('.header');

	navOpener.addEventListener('click', () => {
		header.classList.toggle('active');
	})

	$('.js-visual-slider').slick({
		arrows: true,
		dots: true,
	});

	$('.feedbacks__slider').slick({
		slidesToShow: 4,
		dots: false,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.photo-area__slider').slick({
		slidesToShow: 3,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.js-advantages-slider').slick({
		slidesToShow: 4,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 3,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
		]
	});

	$('.js-team-slider').slick({
		slidesToShow: 3,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
		]
	});


	$('.js-news-slider').slick({
		slidesToShow: 1,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		vertical: true,
		verticalSwiping: true,
		dots: true,
	});

	let viewportWidth = $(window).width();

	if (viewportWidth < 767) {
		$('.js-news-slider').slick('unslick');
	}

	let swiper = new Swiper(".js-ladies-slider", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		preventClicks: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		on: {
			init: function () {
				$('.swiper-slide').addClass('changed');
			},
			slideChangeTransitionStart: function () {
				$('.swiper-slide').addClass('changing');
				$('.swiper-slide').removeClass('changed');
			},
			slideChangeTransitionEnd: function () {
				$('.swiper-slide').removeClass('changing');
				$('.swiper-slide').addClass('changed');
			}
		},
	});

	const currentTime = () => {
		const elements = document.querySelectorAll('.js-tracker');
		// console.log(el);
		let date = new Date();
		let hh = date.getHours();
		let mm = date.getMinutes();
		let ss = date.getSeconds();

		hh = hh < 10 ? `0${hh}` : hh;
		mm = mm < 10 ? `0${mm}` : mm;

		let time = `${hh}<span>:</span>${mm}<span class="blink">:</span>${ss}`;

		for (let elem of elements) {
			elem.innerHTML = time;
		}
	};

	const readMoreOpen = () => {
		$('.js-more-open').on('click', function () {
			// $(this).closest('.our-happy__blockquote').children('.text-holder').toggleClass( "open");
			// $(this).text('Read less');
			if ($(this).closest('.our-happy__blockquote').children('.text-holder').hasClass("open")) {
				$(this).closest('.our-happy__blockquote').children('.text-holder').removeClass("open")
				$(this).text('Read more');
			} else {
				$(this).closest('.our-happy__blockquote').children('.text-holder').addClass("open")
				$(this).text('Read more');
			}
		})
	}

	const loginOpener = () => {
		$('.js-login-opener').on('click', function () {
			$('.js-login-opener').toggleClass('active');
			$('.js-user-info-list').toggleClass('active');
		});

		$(document).mouseup(function (e) {
			if ($('.js-user-info-list').has(e.target).length === 0) {
				$('.js-login-opener').removeClass('active');
				$('.js-user-info-list').removeClass('active');
			}
		});
	}

	const datePicker = () => {
		$(".date-picker").datepicker({
			changeMonth: true,
			changeYear: true,
		});
	}

	console.log(datePicker())

	const mask = () => {
		$(".phone").inputmask({ "mask": "(999) 999-99-99" });
	}

	const customSelect = () => {
		$(".custom-select").selectmenu();
		$(".custom-select").on("selectmenuselect", function (event, ui) {
			if (ui.item.value == 'answer') {
				$('.js-your-answer').addClass('active');
			}
		});
	}

	const addSocial = () => {
		const addBtn = document.querySelectorAll('.js-add-btn');
		const addingBlocks = document.querySelector('.js-adding-socials');
		const addingBlocksLang = document.querySelector('.js-adding-lang');
		const addingSpokenLang = document.querySelector('.js-adding-spoken');
		const addBlock = `
				<div class="socials-holder">
					<div class="input-holder">
						<strong class="input-label">Your social networks <i class="icomoon-privacy"><div class="privacy-text">Confidential field. Accessible only to the Matchmaker</div></i></strong>
						<div class="social-block">
							<select name="social" class="custom-select social-select">
								<option selected="selected">Choose</option>
								<option>Facebook</option>
								<option>Twitter</option>
								<option>Instagram</option>
							</select>
						</div>
					</div>
					<div class="input-holder">
						<input type="text" placeholder="Your nickname/login ">
					</div>
				</div>`;
		const addLangBlock = `
				<div class="socials-holder">
\t\t\t\t\t\t\t\t\t\t<div class="input-holder">
\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="input-required"  placeholder="Language">
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="input-holder">
\t\t\t\t\t\t\t\t\t\t\t<div class="social-block">
\t\t\t\t\t\t\t\t\t\t\t\t<select name="lang-level" class="custom-select social-select">
\t\t\t\t\t\t\t\t\t\t\t\t\t<option selected="selected">Level</option>
\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Low</option>
\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Basic</option>
\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Medium</option>
\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Good</option>
\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Proficiency</option>
\t\t\t\t\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>`;

		const addLangSpok = `
			<div class="socials-holder">
\t\t\t\t\t\t\t\t\t\t<div class="input-holder">
\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="input-required">
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>
		`

		if (addBtn) {
			for (let btn of addBtn) {
				if (btn.classList.contains('js-add-lang')) {
					btn.addEventListener('click', () => {
						addingBlocksLang.insertAdjacentHTML('beforeend', addLangBlock);
						customSelect();
					})
				} else if (btn.classList.contains('js-add-socails')) {
					btn.addEventListener('click', () => {
						addingBlocks.insertAdjacentHTML('beforeend', addBlock);
						customSelect();
					})
				} else {
					btn.addEventListener('click', () => {
						addingSpokenLang.insertAdjacentHTML('beforeend', addLangSpok);
					})
				}
			}
		}
	}

	const addChildren = () => {
		const addBtn = document.querySelector('.js-add-child-btn');
		const addingBlocks = document.querySelector('.js-adding-children');
		let count = 1;

		if (addBtn) {
			addBtn.addEventListener('click', () => {
				console.log(count);
				count += 1;
				console.log(count);
				const addBlock = `
				<div class="status-block">
\t\t\t\t\t\t\t\t\t\t<div class="input-holder">
\t\t\t\t\t\t\t\t\t\t\t<label class="input-label" for="children-date-of-birth-${count}">Date of birth</label>
\t\t\t\t\t\t\t\t\t\t\t<input id="children-date-of-birth-${count}" type="text" class="date-picker" placeholder="mm/dd/yyyy ">
\t\t\t\t\t\t\t\t\t\t\t<i class="icomoon-calendar"></i>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="input-holder input-holder_gender">
\t\t\t\t\t\t\t\t\t\t\t<strong class="input-label">Gender</strong>
\t\t\t\t\t\t\t\t\t\t\t<ul class="status-list">
\t\t\t\t\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="male-${count}" name="children-status-${count}" value="Male">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="male-${count}">Male</label>
\t\t\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="female-${count}" name="children-status-${count}" value="Female">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="female-${count}">Female</label>
\t\t\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>`
				addingBlocks.insertAdjacentHTML('beforeend', addBlock);
				datePicker();
			})
		}
	}

	const selectGifts = () => {
		$(".js-ladies-select").selectmenu({
			change: function (event, ui) {
				$(this).closest('.select-holder').children('.btn').removeAttr("disabled");
			}
		});
	}

	const quantity = () => {

		$('.plus').on('click', function () {
			let input = $(this).closest('.quantity-holder').children('.quantity');
			let price = $(this).closest('tr').children('td').children('.js-price');
			let priceAll = $(this).closest('tr').children('td').children('.js-price-all');
			let priceNumb = parseInt(price.text());
			let priceAllNumb = parseInt(priceAll.text());
			let inputValue = input.val();
			let minValue = parseInt(input.attr('min'));
			let maxValue = parseInt(input.attr('max'));

			if (inputValue < maxValue) {
				input.val(parseInt(inputValue) + 1);
				console.log(1234);
				priceAll.text((priceAllNumb + priceNumb));
			}
		});

		$('.minus').on('click', function () {
			let input = $(this).closest('.quantity-holder').children('.quantity');
			let price = $(this).closest('tr').children('td').children('.js-price');
			let priceAll = $(this).closest('tr').children('td').children('.js-price-all');
			let priceNumb = parseInt(price.text());
			let priceAllNumb = parseInt(priceAll.text());
			let inputValue = input.val();
			let minValue = parseInt(input.attr('min'));
			let maxValue = parseInt(input.attr('max'));

			if (inputValue >= minValue) {
				input.val(parseInt(inputValue) - 1);
				priceAll.text((priceAllNumb - priceNumb));
			}
		});
	};

	const ladiesFilter = () => {

		if ($('.js-filter-opener')) {
			$('.js-filter-opener').on('click', () => {
				if ($('.js-filter-opener').hasClass('active')) {
					$('.js-filter-opener').removeClass('active');
					$('.js-filter').slideUp();
				} else {
					$('.js-filter-opener').addClass('active');
					$('.js-filter').slideDown();
				}
			})
		}
	};

	const openSelect = () => {
		const selectOpeners = document.querySelectorAll('.filter-select-opener');
		const selectsFilter = document.querySelectorAll('.js-select-filter');
		const filterList = document.querySelector('.js-select-filters');
		const removeAll = document.querySelector('.js-remove-all');
		const addFavorites = document.querySelectorAll('.add-to-favorites');

		if (selectOpeners.length > 0) {
			for (let selectOpener of selectOpeners) {
				selectOpener.addEventListener('click', (e) => {
					const opener = e.target;
					const list = opener.nextElementSibling;
					list.classList.toggle("active");
					document.addEventListener("click", function (e) {
						const target = e.target;
						const listTarget = target == list || list.contains(target);

						if (!listTarget && target !== opener) {
							list.classList.remove('active');
						}
					},);
				});
			}

			for (let selectFilter of selectsFilter) {
				selectFilter.addEventListener('click', (e) => {
					const selectText = e.target.innerText;
					const checkFilter = e.target.previousElementSibling;
					const filterTitle = e.target.closest('.input-holder').children[0].innerText;

					if (!checkFilter.checked) {
						filterList.insertAdjacentHTML('afterbegin', `<li id="${checkFilter.id}-check" data-id="${checkFilter.id}" class="choise-item"><span>${filterTitle}:</span> <span>${selectText}</span><span class="remove-choise"></span></li>`);

						const removeChoise = document.querySelectorAll('.remove-choise');

						if (removeChoise.length > 0) {
							removeAll.classList.add('active');

							for (let remove of removeChoise) {
								remove.addEventListener('click', (e) => {
									const item = e.target.closest('.choise-item');
									const checkbox = document.getElementById(item.getAttribute('data-id'));

									checkbox.checked = false;
									item.remove();
									if (removeChoise.length <= 1) {
										removeAll.classList.remove('active');
									}
								})
							}
						}
					} else {
						document.querySelector(`#${checkFilter.id}-check`).remove();
					}
				});
			}

			removeAll.addEventListener('click', (e) => {
				const items = document.querySelectorAll('.choise-item');
				for (let item of items) {
					const checkbox = document.getElementById(item.getAttribute('data-id'));

					checkbox.checked = false;
					item.remove();
					removeAll.classList.remove('active');
				}
			})

			for (let add of addFavorites) {
				add.addEventListener('click', (e) => {
					add.classList.toggle('active');
				})
			}
		}
	}

	// $("#first-step").validate();

	const steps = () => {
		const stepsBtn = document.querySelectorAll('.js-step-btn');
		const stepsModal = document.getElementById('js-modal-step')

		for (let stepBtn of stepsBtn) {
			stepBtn.addEventListener('click', (e) => {
				// let event = e;
				e.preventDefault();

				const stepBlock = e.target.closest('.js-steps-block');
				const nextStep = stepBlock.nextElementSibling;
				const validArr = [];
				let next = false;

				const stepsFormInputs = e.target.closest('.js-steps-form').querySelectorAll('.input-required');

				for (let el of stepsFormInputs) {
					if (el.type == 'text') {
						if (el.value.length == 0) {

							el.classList.add('error');
						} else {
							el.classList.remove('error');
							el.setAttribute("data-valid", "valid");
							validArr.push(el);
						}

						el.addEventListener('change', (e) => {
							if (e.target.value) {
								el.classList.remove('error');
								el.setAttribute("data-valid", "valid");
								validArr.push(el);
							}
						})
					}
				}

				if (stepsFormInputs.length === validArr.length) {
					stepsModal.classList.add('active');
					document.querySelector('.js-modal-yes').addEventListener('click', () => {
						nextStep.querySelector('.js-step').classList.add('active');
						for (let el of stepsFormInputs) {
							el.classList.add('disabled');
						}
						stepsModal.classList.remove('active');
					});
					document.querySelector('.js-modal-no').addEventListener('click', () => {

						stepsModal.classList.remove('active');
					});
				}
				if (next) {
				}
			});
		}
		// $('.js-step-btn').on('click', function () {
		// 	$("#first-step").validate();
		// })
		// $(".js-steps-form").validate();
	}

	const convertWeight = () => {

		// document.querySelector('.convert-weight').addEventListener('click', () => {
		// 	let results = document.querySelector(".results");
		// 	let weight = document.querySelector(".input-weight").value;
		// 	let option = document.querySelector(".weight-select").value;
		// 	let result;
		// 	let unit;
		//
		// 	if (option === "pounds"){
		// 		result = weight * 2.2;
		// 		unit = " kg";
		// 	} else if (option === "kg"){
		// 		result = weight / 2.2;
		// 		unit = " lbs";
		// 	}
		// 	console.log(weight);
		// 	results.style.display = "block";
		// 	results.innerHTML = result.toFixed(2) + unit;
		// 	// results.innerHTML = result;
		// });
	};

	const siblingsStatus = () => {
		const siblingYes = document.getElementById('siblings-yes');
		const siblingNo = document.getElementById('siblings-no');
		const siblingStatus = document.querySelector('.sibling-status');

		if (siblingYes) {
			siblingYes.addEventListener('click', () => {
				siblingStatus.classList.add('active');
			});

			siblingNo.addEventListener('click', () => {
				siblingStatus.classList.remove('active');
			});
		}
	}

	const choosePlan = () => {
		const chooseBtns = document.querySelectorAll('.js-choose-btn');
		const plansSilver = document.querySelectorAll('.silver');
		const plansGold = document.querySelectorAll('.gold');
		const plansPremium = document.querySelectorAll('.premium');
		const plansVip = document.querySelectorAll('.vip');
		const plansVipPlus = document.querySelectorAll('.vip-plus');
		const plansCountry = document.querySelectorAll('.country-of-man');

		for (let btn of chooseBtns) {
			if (btn.classList.contains('silver-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansSilver) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansSilver) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansSilver) {
						plan.classList.toggle('active');
					}
				});
			} else if (btn.classList.contains('gold-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansGold) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansGold) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansGold) {
						plan.classList.toggle('active');
					}
				});
			} else if (btn.classList.contains('premium-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansPremium) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansPremium) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansPremium) {
						plan.classList.toggle('active');
					}
				});
			} else if (btn.classList.contains('vip-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansVip) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansVip) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansVip) {
						plan.classList.toggle('active');
					}
				});
			} else if (btn.classList.contains('vip-plus-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansVipPlus) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansVipPlus) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansVipPlus) {
						plan.classList.toggle('active');
					}
				});
			} else if (btn.classList.contains('country-btn')) {
				btn.addEventListener('mouseenter', () => {
					for (let plan of plansCountry) {
						plan.classList.add('hover');
					}
				});
				btn.addEventListener('mouseleave', () => {
					for (let plan of plansCountry) {
						plan.classList.remove('hover');
					}
				});
				btn.addEventListener('click', () => {
					btn.classList.toggle('active');
					for (let plan of plansCountry) {
						plan.classList.toggle('active');
					}
				});
			}
		}
	}

	const videoText = () => {

	}

	videoText();
	siblingsStatus();
	readMoreOpen();
	currentTime();
	setInterval(currentTime, 1000);
	loginOpener();
	datePicker();
	mask();
	customSelect();
	addSocial();
	addChildren();
	selectGifts();
	quantity();
	ladiesFilter();
	openSelect();
	steps();
	convertWeight();
	choosePlan();

	AOS.init({
		duration: 1000,
	});

	document.addEventListener('aos:in', ({ detail }) => {
		console.log('animated in', detail);
	});

	document.addEventListener('aos:out', ({ detail }) => {
		console.log('animated out', detail);
	});
});

function inputFileCustom() {
	// Список всех <input> на странице
	const inputs = document.querySelectorAll('input[type="file"]');

	// Перебираем все <input>
	inputs.forEach(input => {
		// Блок предпросмотра
		const preview = input.closest('.calculator__form').querySelector('.preview');

		// Список файлов
		const fileList = [];

		// Вешаем функцию onChange на событие change у <input>
		input.addEventListener('change', onChange);

		function onChange() {
			// По каждому файлу <input>
			[...input.files].forEach(file => {
				// Создаём читателя
				const reader = new FileReader;
				// Вешаем событие на читателя
				reader.addEventListener('loadend', () => {
					// Элемент списка .preview
					const item = document.createElement('li');
					// Картинка для предпросмотра
					const image = new Image;
					// URI картинки
					image.src = `data:${file.type};base64,${btoa(reader.result)}`;
					// Ссылка на исключение картинки из списка выгрузки
					const remove = document.createElement('div');
					// Элемент массива fileList
					const fileItem = {
						name: file.name,
						modified: file.lastModified,
						size: file.size,
						data: reader.result
					};
					// Добавляем элемент в список выгрузки
					fileList.push(fileItem);
					// Обработчик клика по ссылке исключения картинки
					remove.addEventListener('click', () => {
						// Исключаем элемент с картинкой из списка выгрузки
						fileList.splice(fileList.indexOf(fileItem), 1);
						// Удаляем элемент списка (<li>) из <ul> 
						item.classList.add('removing');
						setTimeout(() => item.remove(), 100);
					});
					item.appendChild(remove);
					item.appendChild(image);
					preview.appendChild(item);
				});
				// Запускаем чтение файла
				reader.readAsBinaryString(file);
			});
			// Сбрасываем значение <input>
			input.value = '';
			// Создаем клон <input>
			const newInput = input.cloneNode(true);
			// Заменяем <input> клоном
			input.replaceWith(newInput);
			// Теперь input будет указывать на клона
			input = newInput;
			// Повесим функцию onChange на событие change у нового <input>
			input.addEventListener('change', onChange);
		}
	});
}




function initSearchFormSwitcher() {
	jQuery('.btn_search').on('click', function () {
		jQuery('.search-holder').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		let div = $('.search-holder');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}

function resizeBlock() {
	if (window.matchMedia("screen and (max-width: 1319px)").matches) {
		$('.btn_pay').appendTo($('.logo-area'));
	}
	else if (window.matchMedia("screen and (min-width: 1319px)").matches) {
		$('.btn_pay').appendTo($('.header .btn-box'));
	}
}

function loadMore() {
	let items = $('.category__item'),
		per = 3,
		i = 1,
		total = 0;
	$('.load_more').on('click', function (e) {
		e.preventDefault();
		total = per * (i++);
		items.slice(0, total).slideDown();
		$(this)[total >= items.length ? 'slideUp' : 'slideDown']();
	}).click();
}

$(window).resize(function () {
	resizeBlock();
	if ($(window).width() < 768) {
		loadMore();
	}


});

function subMenuNavigation() {
	let doc = jQuery(document),
		isTouchDevice = /Windows Phone/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

	if (isTouchDevice === true) {
		jQuery('.nav .menu-item-has-children').each(function () {
			let navItem = jQuery(this).addClass('touch-device'),
				navItemLink = navItem.children('a'),
				dataClick = navItem.attr('data-click', 0),
				subMenu = navItem.children('.sub-menu');

			navItemLink.on('touchstart', function (e) {
				if (navItem.attr('data-click') == 0) {
					e.preventDefault();

					navItem.attr('data-click', 1).addClass('open');
					subMenu.slideDown();
				} else if (navItem.attr('data-click') == 1) {
					navItem.attr('data-click', 0).removeClass('open');
					subMenu.slideUp();
				}
			});

			function outsideClickHandler(e) {
				if (!jQuery(e.target).closest(navItem).length) {
					navItem.removeClass('open').attr('data-click', 0);
					subMenu.slideUp();
				}
			}

			doc.on('click touchstart', outsideClickHandler);
		});
	}
}

function faqAccordeon() {
	var allLi = jQuery('.faq-list li'),
		allSub = allLi.children('.filter');

	jQuery('.faq-list li > span').each(function () {
		var doc = jQuery(document),
			$this = jQuery(this),
			item = $this.parent('li'),
			itemFilter = $this.next('.text-faq'),
			itemParent = item.parents('li');


		$this.on('click', function () {
			if (item.hasClass('active')) {
				itemFilter.slideUp();
				item.removeClass('active');
			}
			else {
				allLi.not(itemParent).removeClass('active');
				allLi.not(itemParent).find('.text-faq').slideUp();
				itemFilter.slideDown();
				item.addClass('active');
			}
		});
	});
}

function listCategory() {
	var allLi = jQuery('.list-category .item'),
		allSub = allLi.children('.sub-content');

	jQuery('.list-category .item > .intro-box').each(function () {
		var doc = jQuery(document),
			$this = jQuery(this),
			item = $this.parent('li'),
			itemFilter = $this.next('.sub-content'),
			itemParent = item.parents('li');


		$this.on('click', function () {
			if (item.hasClass('active')) {
				itemFilter.slideUp();
				item.removeClass('active');
			}
			else {
				allLi.not(itemParent).removeClass('active');
				allLi.not(itemParent).find('.sub-content').slideUp();
				itemFilter.slideDown();
				item.addClass('active');
			}
		});
	});
}



function tooltip() {
	$('.how-list li').each(function () {
		var tooltip = $(this).find('.tooltip');
		var icon = $(this).find('.icon-info');
		var close = $(this).find('.close');

		// Открытие тултипа при клике на иконку
		icon.click(function () {
			tooltip.fadeIn();
		});

		// Закрытие тултипа при клике на крестик или вне области тултипа
		$(document).mouseup(function (e) {
			if (!tooltip.is(e.target) && tooltip.has(e.target).length === 0 && !icon.is(e.target)) {
				tooltip.fadeOut();
			}
			if (close.is(e.target)) {
				tooltip.fadeOut();
			}
		});
	});
}

