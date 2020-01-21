<template>
  <div id="app">
    <header id="header" class="alt">
      <h1><a href="index.html">Solid State</a></h1>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <div class="inner">
        <h2>Menu</h2>
        <ul class="links">
          <li><a href="/">Home</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/challenges">Challenges</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
        <a href="#" class="close">Close</a>
      </div>
    </nav>

    <router-view />

    <section id="footer">
      <div class="inner">
        <h2 class="major">Get in touch</h2>
        <p>
          Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce
          tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
          ac elementum arcu. Quisque placerat auctor laoreet.
        </p>
        <form method="post" action="#">
          <div class="fields">
            <div class="field">
              <label for="name">Biking</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>
        <ul class="contact">
          <li class="icon solid fa-home">
            Untitled Inc
            <br />
            1234 Somewhere Road Suite #2894
            <br />
            Nashville, TN 00000-0000
          </li>
          <li class="icon solid fa-phone">(000) 000-0000</li>
          <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
          <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
          <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
          <li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
        </ul>
        <ul class="copyright">
          <li>© Untitled Inc. All rights reserved.</li>
          <li>
            Demo Images:
            <a href="http://unsplash.com">Unsplash</a>
          </li>
          <li>
            Design:
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
export default {
  mounted: function() {
    (function($) {
      var $window = $(window),
        $body = $("body"),
        $header = $("#header"),
        $banner = $("#banner");

      // Breakpoints.
      breakpoints({
        xlarge: "(max-width: 1680px)",
        large: "(max-width: 1280px)",
        medium: "(max-width: 980px)",
        small: "(max-width: 736px)",
        xsmall: "(max-width: 480px)"
      });

      // Play initial animations on page load.
      $window.on("load", function() {
        window.setTimeout(function() {
          $body.removeClass("is-preload");
        }, 100);
      });

      // Header.
      if ($banner.length > 0 && $header.hasClass("alt")) {
        $window.on("resize", function() {
          $window.trigger("scroll");
        });

        $banner.scrollex({
          bottom: $header.outerHeight(),
          terminate: function() {
            $header.removeClass("alt");
          },
          enter: function() {
            $header.addClass("alt");
          },
          leave: function() {
            $header.removeClass("alt");
          }
        });
      }

      // Menu.
      var $menu = $("#menu");

      $menu._locked = false;

      $menu._lock = function() {
        if ($menu._locked) return false;

        $menu._locked = true;

        window.setTimeout(function() {
          $menu._locked = false;
        }, 350);

        return true;
      };

      $menu._show = function() {
        if ($menu._lock()) $body.addClass("is-menu-visible");
      };

      $menu._hide = function() {
        if ($menu._lock()) $body.removeClass("is-menu-visible");
      };

      $menu._toggle = function() {
        if ($menu._lock()) $body.toggleClass("is-menu-visible");
      };

      $menu
        .appendTo($body)
        .on("click", function(event) {
          event.stopPropagation();

          // Hide.
          $menu._hide();
        })
        .find(".inner")
        .on("click", ".close", function(event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();

          // Hide.
          $menu._hide();
        })
        .on("click", function(event) {
          event.stopPropagation();
        })
        .on("click", "a", function(event) {
          var href = $(this).attr("href");

          event.preventDefault();
          event.stopPropagation();

          // Hide.
          $menu._hide();

          // Redirect.
          window.setTimeout(function() {
            window.location.href = href;
          }, 350);
        });

      $body
        .on("click", 'a[href="#menu"]', function(event) {
          event.stopPropagation();
          event.preventDefault();

          // Toggle.
          $menu._toggle();
        })
        .on("keydown", function(event) {
          // Hide on escape.
          if (event.keyCode == 27) $menu._hide();
        });
    })(jQuery);
  }
};
</script>
