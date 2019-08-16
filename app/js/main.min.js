$(document).ready( function() {
  const $loader = $('.loader');
  const $nav = $('.nav');
  const $menu = $('.main-menu');
  const $pages = $('.main');
  const $links = $('.link');
  const $homeLink = $('[href="#home"]').closest('li');
  const $submenu = $('.submenu');
  const submenuList = ["#home1", "#home2", "#home3"];
  const $burgerMenu = $('.burger-menu');

  // let serviceAnime = anime({
  //   targets: '.service-anime__dot',
  //   // duration: 2500,
  //   // delay: (el, i, l) => i * 500,    
  //   // endDelay: (el, i, l) => (l - i) * 500,
  //   // opacity: 1,
  //   keyframes: [
  //     {
  //       delay: (el, i, l) => i * 500,
  //       duration: 1000,
  //       value: 0,
  //       opacity: 1
  //     }
  //   ]
  // })

  let serviceAnime = anime.timeline({
    targets: ".service-anime",
    easing: 'linear',
  })
  serviceAnime
  .add({
    targets: ".one .service-anime__dot",
    opacity: 1,
    // duration: 500
    delay: 500
  })
  .add({
    targets: ".eight .service-anime__dot",
    opacity: 1,
    // duration: 500
    delay: 500,
    keyframes: [
      // {transform: 'rotate(0deg)'},
      // {transform: 'rotate(315deg)'}
      {translateX: -50},
      {translateY: -100},

    ]
    
  })

  let advantageAnime = anime({
    targets: ".advantage-anime .item",
    delay: 2000,
    loop: true,
    easing: 'easeInOutSine',
    keyframes: [
      {
        rotate: '+=120deg',
        duration: 1000,
        endDelay: 2000
      },
      {
        rotate: '+=120deg',
        duration: 1000,
        endDelay: 2000
      },
      {
        rotate: '+=120deg',
        duration: 1000
      }
    ]
  })

  $('.burger-menu__btn').click(function() {
    if ($burgerMenu.hasClass('burger-menu--active')) {
      closeMenu();
    } else {
      showMenu()
    }
  })

  $('.burger-menu__overlay').click( function() {
    closeMenu();  
  })

  function showMenu() {
    $burgerMenu.addClass('burger-menu--active');
    $nav.addClass('d-block');
  }

  function closeMenu() {
    $burgerMenu.removeClass('burger-menu--active');
    $nav.removeClass('d-block');
  }

  $loader.addClass('d-none');
  showPage(location.hash);

  $links.click(function(e) {
    e.stopPropagation();
    const route = $(this).find('a').attr("href");
    showPage(route);
  });

  function showPage(route) {

    if( !route || route === "#" || route === "#home") {
      route = '#home1';
    }

    const $page = $(route);
    const $link = $(`a[href="${route}"]`).parent('li');

    if (!$page || !$page.length) {
      return;
    }

    $pages.addClass('d-none');
    $page.removeClass('d-none');

    $links.removeClass('active');
    $link.addClass('active');

    if (submenuList.indexOf(route) >= 0) {
      $submenu.removeClass('d-none');
      $homeLink.addClass('active');
    } else {
      $submenu.addClass('d-none');
    }
  }
  
})

