/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║          Scroll to Top Button Module                             ║
  ║          وحدة زر العودة للأعلى                                    ║
  ║                                                                  ║
  ║          This module provides a smooth scroll-to-top button      ║
  ║          that appears when the user scrolls down the page.       ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

(function() {
  'use strict';

  const ScrollToTop = {
    // Configuration
    config: {
      buttonId: 'scroll-to-top-btn',
      threshold: 300, // Show button after scrolling 300px
      duration: 800, // Animation duration in milliseconds
      easing: 'easeInOutQuad'
    },

    // Initialize the scroll-to-top button
    init() {
      this.createButton();
      this.attachEventListeners();
    },

    // Create the scroll-to-top button
    createButton() {
      const button = document.createElement('button');
      button.id = this.config.buttonId;
      button.className = 'scroll-to-top-btn';
      button.innerHTML = '↑';
      button.title = 'العودة للأعلى / Back to Top';
      button.setAttribute('aria-label', 'العودة للأعلى');
      
      document.body.appendChild(button);
      this.button = button;
    },

    // Attach event listeners
    attachEventListeners() {
      window.addEventListener('scroll', () => this.handleScroll());
      this.button.addEventListener('click', () => this.scrollToTop());
    },

    // Handle scroll event
    handleScroll() {
      if (window.scrollY > this.config.threshold) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    },

    // Smooth scroll to top
    scrollToTop() {
      const startY = window.scrollY;
      const startTime = performance.now();
      const duration = this.config.duration;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = easeInOutQuad(elapsed, 0, 1, duration);
        window.scrollTo(0, startY * (1 - easeProgress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScrollToTop.init());
  } else {
    ScrollToTop.init();
  }

  // Export for use in other modules
  window.ScrollToTop = ScrollToTop;
})();
