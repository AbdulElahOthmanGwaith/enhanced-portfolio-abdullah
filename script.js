/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║          عبدالاله عثمان غويث - الملف الرئيسي للتفاعلات          ║
  ║          Abdulelah Othman Ghawaith - Main JavaScript File         ║
  ║                                                                  ║
  ║          الإصدار: 2.0                                             ║
  ║          التاريخ: يناير 2025                                      ║
  ║          المطور: MiniMax Agent                                   ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════
  // القسم الأول: المتغيرات العامة والثوابت
  // Section 1: Global Variables and Constants
  // ═══════════════════════════════════════════════════════════════════

  const CONFIG = {
    storageKeys: {
      theme: 'abdullah_theme',
      language: 'abdullah_language',
      settings: 'abdullah_settings'
    },
    animations: {
      duration: 300,
      durationSlow: 500
    },
    apiKeys: {
      // يمكن إضافة مفاتيح API هنا
    }
  };

  const TRANSLATIONS = {
    ar: {
      // الترويسة
      'nav.home': 'الرئيسية',
      'nav.services': 'الخدمات',
      'nav.projects': 'المشاريع',
      'nav.skills': 'المهارات',
      'nav.contact': 'اتصل بنا',
      'nav.about': 'من أنا',

      // Hero Section
      'hero.greeting': 'مرحباً، أنا',
      'hero.title': 'عبدالاله عثمان غويث',
      'hero.subtitle': 'مطور ويب ومصمم واجهات مستخدم',
      'hero.description': 'أقوم بتصميم وتطوير مواقع وتطبيقات ويب حديثة وعالية الجودة مع التركيز على تجربة المستخدم والأداء المتفوق.',
      'hero.cta.primary': 'عرض أعمالي',
      'hero.cta.secondary': 'تواصل معي',
      'hero.stats.projects': 'مشروع',
      'hero.stats.clients': 'عميل',
      'hero.stats.experience': 'سنوات',

      // Services
      'services.title': 'خدماتي',
      'services.subtitle': 'أقدم مجموعة متنوعة من الخدمات التقنية المتكاملة',
      'service.web_development': 'تطوير الويب',
      'service.web_desc': 'بناء مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات والأطر البرمجية.',
      'service.ui_design': 'تصميم واجهات',
      'service.ui_desc': 'تصميم واجهات مستخدم عصرية وجذابة تركز على سهولة الاستخدام.',
      'service.mobile_apps': 'تطبيقات الجوال',
      'service.mobile_desc': 'تطوير تطبيقات جوال أصلية وهجينة لنظامي iOS وAndroid.',
      'service.consulting': 'استشارات تقنية',
      'service.consulting_desc': 'تقديم استشارات متخصصة في اختيار التقنيات المناسبة لمشروعك.',

      // Testimonials
      'testimonials.title': 'آراء العملاء',
      'testimonials.subtitle': 'ماذا يقول شركاء النجاح عن تجربة العمل معي',

      // Projects
      'projects.title': 'مشاريعي',
      'projects.subtitle': 'بعض من أعمالنا السابقة التي نفخر بها',
      'project.view': 'عرض المشروع',
      'project.code': 'الرمز البرمجي',

      // Skills
      'skills.title': 'مهاراتي',
      'skills.subtitle': 'التقنيات والأدوات التي أتقنها',
      'skill.level': 'مستوى',

      // Contact
      'contact.title': 'تواصل معي',
      'contact.subtitle': 'لديك فكرة مشروع؟ دعنا نتحدث عنها',
      'contact.info.title': 'معلومات التواصل',
      'contact.email': 'البريد الإلكتروني',
      'contact.phone': 'الهاتف',
      'contact.location': 'الموقع',
      'contact.form.name': 'الاسم',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.subject': 'الموضوع',
      'contact.form.message': 'الرسالة',
      'contact.form.submit': 'إرسال الرسالة',
      'contact.form.reset': 'إعادة تعيين',

      // Footer
      'footer.brand': 'عبدالاله عثمان غويث',
      'footer.tagline': 'مطور ويب ومصمم واجهات مستخدم محترف',
      'footer.quick_links': 'روابط سريعة',
      'footer.services': 'الخدمات',
      'footer.about': 'من أنا',
      'footer.portfolio': 'أعمالي',
      'footer.blog': 'المدونة',
      'footer.legal': 'المعلومات القانونية',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'الشروط والأحكام',
      'footer.copyright': 'جميع الحقوق محفوظة',

      // Settings
      'settings.title': 'الإعدادات',
      'settings.theme': 'المظهر',
      'settings.theme.light': 'الفاتح',
      'settings.theme.dark': 'الداكن',
      'settings.theme.auto': 'تلقائي',
      'settings.language': 'اللغة',
      'settings.notifications': 'الإشعارات',
      'settings.performance': 'الأداء',

      // Notifications
      'notification.success': 'تم بنجاح!',
      'notification.error': 'حدث خطأ',
      'notification.info': 'معلومات',

      // Chat
      'chat.placeholder': 'اكتب رسالتك هنا...',
      'chat.send': 'إرسال',

      // Common
      'common.loading': 'جاري التحميل...',
      'common.close': 'إغلاق',
      'common.save': 'حفظ',
      'common.cancel': 'إلغاء',
      'common.delete': 'حذف',
      'common.edit': 'تعديل',
      'common.view': 'عرض'
    },
    en: {
      // Header
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'nav.about': 'About Me',

      // Hero Section
      'hero.greeting': 'Hello, I am',
      'hero.title': 'Abdulelah Othman Ghawaith',
      'hero.subtitle': 'Web Developer & UI Designer',
      'hero.description': 'I design and develop modern, high-quality websites and web applications with a focus on user experience and superior performance.',
      'hero.cta.primary': 'View My Work',
      'hero.cta.secondary': 'Contact Me',
      'hero.stats.projects': 'Projects',
      'hero.stats.clients': 'Clients',
      'hero.stats.experience': 'Years',

      // Services
      'services.title': 'My Services',
      'services.subtitle': 'I offer a variety of integrated technical services',
      'service.web_development': 'Web Development',
      'service.web_desc': 'Building integrated websites and web applications using the latest technologies and frameworks.',
      'service.ui_design': 'UI Design',
      'service.ui_desc': 'Designing modern and attractive user interfaces focused on usability.',
      'service.mobile_apps': 'Mobile Apps',
      'service.mobile_desc': 'Developing native and hybrid mobile applications for iOS and Android.',
      'service.consulting': 'Technical Consulting',
      'service.consulting_desc': 'Providing specialized consulting on choosing the right technologies for your project.',

      // Testimonials
      'testimonials.title': 'Testimonials',
      'testimonials.subtitle': 'What success partners say about working with me',

      // Projects
      'projects.title': 'My Projects',
      'projects.subtitle': 'Some of our previous works that we are proud of',
      'project.view': 'View Project',
      'project.code': 'Source Code',

      // Skills
      'skills.title': 'My Skills',
      'skills.subtitle': 'Technologies and tools I master',
      'skill.level': 'Level',

      // Contact
      'contact.title': 'Contact Me',
      'contact.subtitle': 'Have a project idea? Let\'s talk about it',
      'contact.info.title': 'Contact Information',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.form.reset': 'Reset',

      // Footer
      'footer.brand': 'Abdulelah Othman Ghawaith',
      'footer.tagline': 'Professional Web Developer & UI Designer',
      'footer.quick_links': 'Quick Links',
      'footer.services': 'Services',
      'footer.about': 'About Me',
      'footer.portfolio': 'Portfolio',
      'footer.blog': 'Blog',
      'footer.legal': 'Legal Information',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.copyright': 'All rights reserved',

      // Settings
      'settings.title': 'Settings',
      'settings.theme': 'Theme',
      'settings.theme.light': 'Light',
      'settings.theme.dark': 'Dark',
      'settings.theme.auto': 'Auto',
      'settings.language': 'Language',
      'settings.notifications': 'Notifications',
      'settings.performance': 'Performance',

      // Notifications
      'notification.success': 'Success!',
      'notification.error': 'An error occurred',
      'notification.info': 'Information',

      // Chat
      'chat.placeholder': 'Type your message here...',
      'chat.send': 'Send',

      // Common
      'common.loading': 'Loading...',
      'common.close': 'Close',
      'common.save': 'Save',
      'common.cancel': 'Cancel',
      'common.delete': 'Delete',
      'common.edit': 'Edit',
      'common.view': 'View'
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثاني: حالة التطبيق
  // Section 2: App State
  // ═══════════════════════════════════════════════════════════════════

  const AppState = {
    theme: 'light',
    language: 'ar',
    notifications: true,
    mobileMenuOpen: false,
    settingsPanelOpen: false,
    currentModal: null,
    scrollY: 0
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثالث: أدوات مساعدة
  // Section 3: Utility Functions
  // ═══════════════════════════════════════════════════════════════════

  const Utils = {
    // الحصول على العنصر
    $(selector) {
      return document.querySelector(selector);
    },

    // الحصول على جميع العناصر
    $$(selector) {
      return document.querySelectorAll(selector);
    },

    // إنشاء عنصر
    createElement(tag, attributes = {}, children = []) {
      const element = document.createElement(tag);

      Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'className') {
          element.className = value;
        } else if (key === 'dataset') {
          Object.entries(value).forEach(([dataKey, dataValue]) => {
            element.dataset[dataKey] = dataValue;
          });
        } else if (key.startsWith('on')) {
          const eventName = key.substring(2).toLowerCase();
          element.addEventListener(eventName, value);
        } else if (key === 'style' && typeof value === 'object') {
          Object.assign(element.style, value);
        } else {
          element.setAttribute(key, value);
        }
      });

      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
          element.appendChild(child);
        }
      });

      return element;
 },

    // إضافة تأثير تحريك
    animate(element, keyframes, options) {
      if (element && element.animate) {
        return element.animate(keyframes, options);
      }
      return null;
    },

    // تنسيق الأرقام
    formatNumber(num) {
      return new Intl.NumberFormat(AppState.language === 'ar' ? 'ar-SA' : 'en-US').format(num);
    },

    // تأخير
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    // التحقق من الدعم
    supports(feature) {
      return feature in document.createElement('div').style;
    },

    // الحصول على اتجاه النص
    getTextDirection() {
      return AppState.language === 'ar' ? 'rtl' : 'ltr';
    },

    // التمرير السلس
    scrollTo(element, offset = 0) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    },

    // إنشاء إشعار
    showNotification(message, type = 'info', duration = 3000) {
      let container = Utils.$('.notification-container');
      if (!container) {
        container = Utils.createElement('div', {
          className: 'notification-container',
          style: {
            position: 'fixed',
            top: '100px',
            right: '20px',
            zIndex: '3000',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }
        });
        document.body.appendChild(container);
      }

      const notification = Utils.createElement('div', {
        className: `notification ${type}`,
        style: {
          padding: '1rem 1.5rem',
          borderRadius: '10px',
          background: AppState.theme === 'dark' ? '#1e293b' : '#ffffff',
          color: AppState.theme === 'dark' ? '#f1f5f9' : '#1e293b',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          borderRight: `4px solid ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#4f46e5'}`,
          transform: 'translateX(120%)',
          transition: 'transform 0.3s ease'
        }
      });

      notification.textContent = message;
      container.appendChild(notification);

      // إظهار الإشعار
      requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
      });

      // إخفاء الإشعار بعد المدة المحددة
      setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, duration);
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الرابع: إدارة الثيم
  // Section 4: Theme Manager
  // ═══════════════════════════════════════════════════════════════════

  const ThemeManager = {
    init() {
      // قراءة الثيم المحفوظ
      const savedTheme = localStorage.getItem(CONFIG.storageKeys.theme);

      if (savedTheme) {
        AppState.theme = savedTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        AppState.theme = 'dark';
      }

      this.applyTheme(AppState.theme);

      // الاستماع لتغييرات نظام الثيم
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          const savedTheme = localStorage.getItem(CONFIG.storageKeys.theme);
          if (!savedTheme) {
            this.applyTheme(e.matches ? 'dark' : 'light');
          }
        });
      }
    },

    applyTheme(theme) {
      AppState.theme = theme;

      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }

      localStorage.setItem(CONFIG.storageKeys.theme, theme);
      this.updateToggleButton();
    },

    toggle() {
      const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
      this.applyTheme(newTheme);
      Utils.showNotification(
        AppState.language === 'ar'
          ? (newTheme === 'dark' ? 'تم تفعيل الوضع الداكن' : 'تم تفعيل الوضع الفاتح')
          : (newTheme === 'dark' ? 'Dark mode activated' : 'Light mode activated'),
        'success'
      );
    },

    setTheme(theme) {
      this.applyTheme(theme);
    },

    updateToggleButton() {
      const toggle = Utils.$('.theme-toggle');
      if (toggle) {
        if (AppState.theme === 'dark') {
          toggle.classList.add('active');
          const thumb = toggle.querySelector('.theme-toggle-thumb');
          if (thumb) {
            thumb.innerHTML = '🌙';
          }
        } else {
          toggle.classList.remove('active');
          const thumb = toggle.querySelector('.theme-toggle-thumb');
          if (thumb) {
            thumb.innerHTML = '☀️';
          }
        }
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الخامس: إدارة اللغة
  // Section 5: Language Manager
  // ═══════════════════════════════════════════════════════════════════

  const LanguageManager = {
    init() {
      // قراءة اللغة المحفوظة
      const savedLanguage = localStorage.getItem(CONFIG.storageKeys.language);

      if (savedLanguage && ['ar', 'en'].includes(savedLanguage)) {
        AppState.language = savedLanguage;
      } else {
        // تحديد اللغة من المتصفح
        const browserLang = navigator.language || navigator.userLanguage;
        AppState.language = browserLang.startsWith('ar') ? 'ar' : 'en';
      }

      this.applyLanguage(AppState.language);
    },

    applyLanguage(lang) {
      AppState.language = lang;

      // تحديث اتجاه الصفحة
      document.documentElement.lang = lang;
      document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
      document.body.classList.remove(lang === 'ar' ? 'ltr' : 'rtl');

      // تحديث متغيرات CSS
      document.documentElement.style.setProperty('--direction', lang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.style.setProperty('--text-align', lang === 'ar' ? 'right' : 'left');

      // تحديث النصوص
      this.updateTextContent();

      // تحديث الروابط في التنقل
      this.updateNavLinks();

      // حفظ اللغة
      localStorage.setItem(CONFIG.storageKeys.language, lang);

      // تحديث زر اللغة
      this.updateLanguageButton();

      // إعادة رسم كتالوج المشاريع عند تبديل اللغة بعد تهيئته.
      if (typeof ProjectCatalog !== 'undefined' && ProjectCatalog.ready) {
        ProjectCatalog.render();
      }
    },

    updateTextContent() {
      const translations = TRANSLATIONS[AppState.language];

      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });

      // تحديث placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
          element.placeholder = translations[key];
        }
      });

      // تحديث title
      document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[key]) {
          element.title = translations[key];
        }
      });
    },

    updateNavLinks() {
      const navLinks = Utils.$$('.nav-link');
      const mobileNavLinks = Utils.$$('.mobile-nav-link');

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          const sectionId = href.replace('#', '');
          const element = Utils.$(`#${sectionId}`);
          if (element) {
            const title = element.getAttribute('data-title');
            if (title) {
              link.textContent = TRANSLATIONS[AppState.language][title] || title;
            }
          }
        }
      });

      mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          const sectionId = href.replace('#', '');
          const element = Utils.$(`#${sectionId}`);
          if (element) {
            const title = element.getAttribute('data-title');
            if (title) {
              link.textContent = TRANSLATIONS[AppState.language][title] || title;
            }
          }
        }
      });
    },

    toggle() {
      const newLang = AppState.language === 'ar' ? 'en' : 'ar';
      this.applyLanguage(newLang);
      Utils.showNotification(
        newLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English',
        'success'
      );
    },

    setLanguage(lang) {
      this.applyLanguage(lang);
    },

    updateLanguageButton() {
      const btn = Utils.$('.language-btn .current-lang');
      if (btn) {
        btn.textContent = AppState.language === 'ar' ? 'العربية' : 'English';
      }

      // تحديث الخيارات النشطة
      document.querySelectorAll('.language-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === AppState.language);
      });
    },

    t(key) {
      return TRANSLATIONS[AppState.language][key] || key;
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم السادس: التنقل
  // Section 6: Navigation
  // ═══════════════════════════════════════════════════════════════════

  const Navigation = {
    init() {
      this.handleScroll();
      this.handleNavLinks();
      this.handleMobileMenu();
    },

    handleScroll() {
      const header = Utils.$('.header');

      window.addEventListener('scroll', () => {
        AppState.scrollY = window.scrollY;

        if (AppState.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // تحديد القسم الحالي
        this.updateActiveSection();
      });
    },

    handleNavLinks() {
      const navLinks = Utils.$$('.nav-link');
      const mobileNavLinks = Utils.$$('.mobile-nav-link');

      const allLinks = [...navLinks, ...mobileNavLinks];

      allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');

          if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetSection = Utils.$(`#${targetId}`);

            if (targetSection) {
              Navigation.scrollToSection(targetSection);
            }
          }

          // إغلاق قائمة الجوال إذا كانت مفتوحة
          if (AppState.mobileMenuOpen) {
            this.closeMobileMenu();
          }
        });
      });
    },

    scrollToSection(section) {
      const headerHeight = Utils.$('.header').offsetHeight;
      const targetPosition = section.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    },

    updateActiveSection() {
      const sections = Utils.$$('section[id]');
      const headerHeight = Utils.$('.header').offsetHeight;

      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (AppState.scrollY >= sectionTop && AppState.scrollY < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });

      // تحديث الروابط النشطة
      document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    },

    handleMobileMenu() {
      const menuBtn = Utils.$('.mobile-menu-btn');
      const mobileMenu = Utils.$('.mobile-menu');

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          if (AppState.mobileMenuOpen) {
            this.closeMobileMenu();
          } else {
            this.openMobileMenu();
          }
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
          if (AppState.mobileMenuOpen &&
              !mobileMenu.contains(e.target) &&
              !menuBtn.contains(e.target)) {
            this.closeMobileMenu();
          }
        });
      }
    },

    openMobileMenu() {
      const mobileMenu = Utils.$('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.add('active');
        AppState.mobileMenuOpen = true;

        const menuBtn = Utils.$('.mobile-menu-btn');
        if (menuBtn) {
          menuBtn.innerHTML = '✕';
        }
      }
    },

    closeMobileMenu() {
      const mobileMenu = Utils.$('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        AppState.mobileMenuOpen = false;

        const menuBtn = Utils.$('.mobile-menu-btn');
        if (menuBtn) {
          menuBtn.innerHTML = '☰';
        }
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم السابع: لوحة الإعدادات
  // Section 7: Settings Panel
  // ═══════════════════════════════════════════════════════════════════

  const SettingsPanel = {
    init() {
      this.createPanel();
      this.bindEvents();
    },

    createPanel() {
      // تستخدم الصفحة لوحة إعدادات ثابتة؛ لا تنشئ نسخة ثانية بمعرّف DOM مكرر.
      return Utils.$('#settingsPanel, #settings-panel');
    },

    bindEvents() {
      const toggleBtn = Utils.$('.settings-toggle');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          if (AppState.settingsPanelOpen) {
            this.close();
          } else {
            this.open();
          }
        });
      }

      // إغلاق عند النقر خارج اللوحة
      document.addEventListener('click', (e) => {
        if (AppState.settingsPanelOpen &&
            !e.target.closest('.settings-panel') &&
            !e.target.closest('.settings-toggle')) {
          this.close();
        }
      });
    },

    open() {
      const panel = Utils.$('#settingsPanel, #settings-panel');
      if (panel) {
        panel.classList.add('active');
        AppState.settingsPanelOpen = true;
      }
    },

    close() {
      const panel = Utils.$('#settingsPanel, #settings-panel');
      if (panel) {
        panel.classList.remove('active');
        AppState.settingsPanelOpen = false;
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثامن: النماذج المنبثقة
  // Section 8: Modals
  // ═══════════════════════════════════════════════════════════════════

  const Modal = {
    init() {
      // إنشاء حاوية النماذج المنبثقة
      const container = Utils.createElement('div', {
        id: 'modalContainer',
        style: {
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          pointerEvents: 'none'
        }
      });
      document.body.appendChild(container);
    },

    open(modalId) {
      const modal = Utils.$(modalId);
      if (modal) {
        const overlay = modal.querySelector('.modal-overlay') || modal;
        overlay.classList.add('active');
        AppState.currentModal = modalId;

        // تعطيل التمرير في الخلفية
        document.body.style.overflow = 'hidden';
      }
    },

    close(modalId) {
      const modal = modalId ? Utils.$(modalId) : Utils.$(AppState.currentModal);
      if (modal) {
        const overlay = modal.querySelector('.modal-overlay') || modal;
        overlay.classList.remove('active');

        // إعادة تمكين التمرير
        document.body.style.overflow = '';

        AppState.currentModal = null;
      }
    },

    create(options) {
      const {
        id,
        title,
        content,
        size = 'md'
      } = options;

      const modal = Utils.createElement('div', {
        className: 'modal-overlay',
        id: id
      });

      const sizeClass = size === 'lg' ? 'max-width: 1000px;' : size === 'sm' ? 'max-width: 500px;' : '';

      modal.innerHTML = `
        <div class="modal" style="${sizeClass}">
          <div class="modal-header">
            <h3 class="modal-title">${title}</h3>
            <button class="modal-close" onclick="Modal.close('#${id}')">✕</button>
          </div>
          <div class="modal-body">
            ${content}
          </div>
        </div>
      `;

      const container = Utils.$('#modalContainer');
      if (container) {
        container.appendChild(modal);

        // إظهار النموذج
        requestAnimationFrame(() => {
          modal.classList.add('active');
        });

        // إغلاق عند النقر خارج المحتوى
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.close(`#${id}`);
          }
        });

        return modal;
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم التاسع: عارض الصور
  // Section 9: Image Viewer
  // ═══════════════════════════════════════════════════════════════════

  const ImageViewer = {
    init() {
      this.createViewer();
      this.bindEvents();
    },

    createViewer() {
      const viewer = Utils.createElement('div', {
        className: 'image-viewer',
        id: 'imageViewer'
      });

      viewer.innerHTML = `
        <button class="image-viewer-close" onclick="ImageViewer.close()">✕</button>
        <img src="" alt="Image" id="viewerImage">
      `;

      document.body.appendChild(viewer);

      // إغلاق عند الضغط على ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });
    },

    bindEvents() {
      // ربط جميع الصور القابلة للنقر
      document.querySelectorAll('.clickable-image, .project-image, .service-card, .tool-card').forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', () => {
          let imageSrc = element.tagName === 'IMG' ? element.src : element.querySelector('img')?.src;
          if (imageSrc) {
            this.open(imageSrc);
          }
        });
      });
    },

    open(src) {
      const viewer = Utils.$('#imageViewer');
      const image = Utils.$('#viewerImage');

      if (viewer && image) {
        image.src = src;
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    },

    close() {
      const viewer = Utils.$('#imageViewer');
      if (viewer) {
        viewer.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم العاشر: نموذج الاتصال
  // Section 10: Contact Form
  // ═══════════════════════════════════════════════════════════════════

  const ContactForm = {
    init() {
      const form = Utils.$('#contact-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSubmit(e.target);
        });
      }
    },

    handleSubmit(form) {
      const formData = new FormData(form);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      // التحقق من البيانات
      if (!data.name || !data.email || !data.message) {
        Utils.showNotification(
          LanguageManager.t('notification.error'),
          'error'
        );
        return;
      }

      // محاكاة إرسال النموذج
      Utils.showNotification(
        LanguageManager.t('notification.success'),
        'success'
      );

      // إعادة تعيين النموذج
      form.reset();

      // طباعة البيانات (لأغراض التطوير)
      console.log('Contact Form Data:', data);
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الحادي عشر: محرر الكود
  // Section 11: Code Editor
  // ═══════════════════════════════════════════════════════════════════

  const CodeEditor = {
    init() {
      this.bindEvents();
      this.setupAutoResize();
    },

    bindEvents() {
      const runBtn = Utils.$('#runCode');
      const resetBtn = Utils.$('#resetCode');

      if (runBtn) {
        runBtn.addEventListener('click', () => this.runCode());
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => this.resetCode());
      }
    },

    setupAutoResize() {
      const textarea = Utils.$('#codeEditor textarea');
      if (textarea) {
        textarea.addEventListener('input', () => {
          textarea.style.height = 'auto';
          textarea.style.height = textarea.scrollHeight + 'px';
        });
      }
    },

    runCode() {
      const textarea = Utils.$('#codeEditor textarea');
      const output = Utils.$('#codeOutput');

      if (textarea && output) {
        const code = textarea.value;

        try {
          // إعادة توجيه console.log إلى الإخراج
          const logs = [];
          const originalLog = console.log;
          console.log = (...args) => {
            logs.push(args.map(arg =>
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };

          // تنفيذ الكود
          eval(code);

          // استعادة console.log
          console.log = originalLog;

          // عرض الإخراج
          output.innerHTML = logs.length > 0
            ? `<pre style="margin: 0; white-space: pre-wrap;">${logs.join('\n')}</pre>`
            : '<p style="color: #64748b; margin: 0;">تم تنفيذ الكود بنجاح بدون مخرجات</p>';

          Utils.showNotification('تم تنفيذ الكود بنجاح', 'success');
        } catch (error) {
          output.innerHTML = `<p style="color: #ef4444; margin: 0;">خطأ: ${error.message}</p>`;
          Utils.showNotification(error.message, 'error');
        }
      }
    },

    resetCode() {
      const textarea = Utils.$('#codeEditor textarea');
      const output = Utils.$('#codeOutput');

      if (textarea) {
        textarea.value = '// اكتب كودك هنا\nconsole.log("مرحباً بالعالم!");';
        textarea.style.height = 'auto';
      }

      if (output) {
        output.innerHTML = '<p style="color: #64748b; margin: 0;">الناتج سيظهر هنا...</p>';
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثاني عشر: الدردشة الذكية
  // Section 12: AI Chat
  // ═══════════════════════════════════════════════════════════════════

  const AIChat = {
    messages: [],

    init() {
      this.bindEvents();
      this.addWelcomeMessage();
    },

    bindEvents() {
      const input = Utils.$('#chatInput');
      const sendBtn = Utils.$('#chatSend');

      if (input && sendBtn) {
        const sendMessage = () => this.sendMessage();

        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        });
      }
    },

    addWelcomeMessage() {
      const messagesContainer = Utils.$('#chatMessages');
      if (messagesContainer) {
        this.addMessage(
          LanguageManager.t('hero.subtitle') + ' ' + LanguageManager.t('hero.greeting') + ' ' + LanguageManager.t('hero.title'),
          'bot'
        );
      }
    },

    addMessage(text, type) {
      const messagesContainer = Utils.$('#chatMessages');
      if (messagesContainer) {
        const message = Utils.createElement('div', {
          className: `chat-message ${type}`
        });

        message.textContent = text;
        messagesContainer.appendChild(message);

        // التمرير إلى الأسفل
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // حفظ الرسالة
        this.messages.push({ text, type });
      }
    },

    async sendMessage() {
      const input = Utils.$('#chatInput');
      const sendBtn = Utils.$('#chatSend');

      if (!input || !input.value.trim()) return;

      const message = input.value.trim();
      input.value = '';

      // تعطيل الزر أثناء الإرسال
      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.style.opacity = '0.5';
      }

      // إضافة رسالة المستخدم
      this.addMessage(message, 'user');

      // محاكاة رد الذكاء الاصطناعي
      await Utils.delay(1000);

      const responses = [
        'هذا سؤال رائع! يمكنني مساعدتك في ذلك.',
        'أفهم ما تقصد. دعني أساعدك.',
        'ممتاز! هذا من أفضل الأسئلة التي_receivedها اليوم.',
        'شكراً لسؤالك. إليك الإجابة...',
        'أنا هنا للمساعدة. تفضل بسؤالك.'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      this.addMessage(randomResponse, 'bot');

      // إعادة تمكين الزر
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.style.opacity = '1';
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثالث عشر: أدوات التفاعل
  // Section 13: Interactive Tools
  // ═══════════════════════════════════════════════════════════════════

  const InteractiveTools = {
    init() {
      this.bindToolCards();
      this.bindTabs();
    },

    bindToolCards() {
      const toolCards = Utils.$$('.tool-card, .service-card, .project-card');

      toolCards.forEach(card => {
        card.addEventListener('click', () => {
          const title = card.querySelector('.tool-title, .service-title, .project-title')?.textContent;
          const description = card.querySelector('.tool-description, .service-description, .project-description')?.textContent;

          if (title) {
            this.openToolModal(title, description);
          }
        });
      });
    },

    openToolModal(title, description) {
      Modal.create({
        id: 'toolModal',
        title: title,
        content: `
          <p style="color: var(--text-secondary); line-height: 1.8;">${description}</p>
          <div style="margin-top: 2rem;">
            <button class="btn btn-primary" style="width: 100%;">${LanguageManager.t('common.view')}</button>
          </div>
        `,
        size: 'md'
      });

      Modal.open('#toolModal');
    },

    bindTabs() {
      const tabButtons = Utils.$$('.tab-btn');

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const tabGroup = btn.closest('.tabs');
          const tabContent = btn.closest('.tabs-section')?.querySelector('.tab-content.active, .tab-pane.active');

          if (tabGroup) {
            // إزالة النشط من جميع الأزرار
            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          }

          if (tabContent) {
            tabContent.classList.remove('active');
          }

          // إظهار المحتوى المناسب
          const targetId = btn.getAttribute('data-tab');
          if (targetId) {
            const targetContent = Utils.$(targetId);
            if (targetContent) {
              targetContent.classList.add('active');
            }
          }
        });
      });
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الرابع عشر: رسوم متحركة
  // Section 14: Animations
  // ═══════════════════════════════════════════════════════════════════

  const Animations = {
    init() {
      this.setupScrollAnimations();
      this.setupCounterAnimations();
    },

    setupScrollAnimations() {
      const animatedElements = Utils.$$('.animate-on-scroll, .service-card, .project-card, .skill-item');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

      // إضافة نمط CSS للرسوم المتحركة
      const style = document.createElement('style');
      style.textContent = `
        .animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `;
      document.head.appendChild(style);
    },

    setupCounterAnimations() {
      const counters = Utils.$$('.stat-number[data-count]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => observer.observe(counter));
    },

    animateCounter(element) {
      const target = parseInt(element.getAttribute('data-count')) || parseInt(element.textContent);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الخامس عشر: مؤشرات التقدم
  // Section 15: Progress Bars
  // ═══════════════════════════════════════════════════════════════════

  const ProgressBars = {
    init() {
      const bars = Utils.$$('.skill-progress, .progress-fill');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width') || bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
            observer.unobserve(bar);
          }
        });
      }, { threshold: 0.5 });

      bars.forEach(bar => observer.observe(bar));
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم السادس عشر: إدارة التحميل
  // Section 16: Loading Manager
  // ═══════════════════════════════════════════════════════════════════

  const LoadingManager = {
    init() {
      const loader = Utils.$('.loader');
      if (loader) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
          }, 500);
        });
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم السابع عشر: حماية المحتوى
  // Section 17: Content Protection
  // ═══════════════════════════════════════════════════════════════════

  const ContentProtection = {
    init() {
      // لا نعطّل النسخ أو قائمة السياق؛ ذلك يضر الوصول وتجربة المستخدم ولا يوفر حماية حقيقية.
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم الثامن عشر: كتالوج المشاريع
  // Section 18: Project Catalog
  // ═══════════════════════════════════════════════════════════════════

  const ProjectCatalog = {
    ready: false,
    container: null,
    activeFilter: 'all',
    filters: [],
    projects: [
      {
        category: 'web',
        status: 'active',
        short: 'AC',
        title: { ar: 'Asserag Clone', en: 'Asserag Clone' },
        description: { ar: 'منصة ثنائية اللغة للمصانع الطبية مع خرائط وتدفقات تواصل محسّنة.', en: 'A bilingual platform for medical manufacturers with resilient maps and contact flows.' },
        technologies: ['React', 'TypeScript', 'Vite'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/asserag-clone'
      },
      {
        category: 'tools',
        status: 'active',
        short: 'AG',
        title: { ar: 'Auto-Guardian-Core', en: 'Auto-Guardian-Core' },
        description: { ar: 'أداة فحص وتغليف أمني للكود مع CLI وتقارير JSON وSARIF قابلة للدمج مع CI.', en: 'A secure code verification and packaging tool with CLI, JSON, and SARIF CI reports.' },
        technologies: ['Python', 'CLI', 'SARIF'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/Auto-Guardian-Core'
      },
      {
        category: 'web',
        status: 'production',
        short: 'AW',
        title: { ar: 'Auto-Guardian Website', en: 'Auto-Guardian Website' },
        description: { ar: 'واجهة عرض لنظام الأمان مع نموذج تواصل قابل للتهيئة واختبارات ثابتة.', en: 'A security-system showcase with a configurable contact flow and static verification.' },
        technologies: ['HTML', 'CSS', 'Vite'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/auto-guardian-website'
      },
      {
        category: 'web',
        status: 'active',
        short: 'NP',
        title: { ar: 'Nebras Platform', en: 'Nebras Platform' },
        description: { ar: 'منصة عربية متعددة المشاريع مع اختبارات بنية وروابط قابلة لإعادة التشغيل.', en: 'An Arabic multi-project platform with reproducible structure and link checks.' },
        technologies: ['HTML', 'Playwright', 'CI'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/nebras-platform'
      },
      {
        category: 'web',
        status: 'active',
        short: 'PF',
        title: { ar: 'Enhanced Portfolio', en: 'Enhanced Portfolio' },
        description: { ar: 'محفظة شخصية ثنائية اللغة مع تحسينات وصول وPWA وبيانات مشاريع قابلة للعرض.', en: 'A bilingual personal portfolio with accessibility, PWA, and verifiable project data.' },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/enhanced-portfolio-abdullah'
      },
      {
        category: 'web',
        status: 'prototype',
        short: 'CH',
        title: { ar: 'ConnectHub', en: 'ConnectHub' },
        description: { ar: 'نموذج واجهة اجتماعية أمامية مع فحص smoke واضح وحدود إنتاجية موثقة.', en: 'A frontend social interface prototype with explicit smoke checks and documented production limits.' },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        repo: 'https://github.com/AbdulElahOthmanGwaith/my-website-project'
      }
    ],

    init() {
      this.container = Utils.$('.projects-grid');
      this.filters = Array.from(document.querySelectorAll('.filter-btn'));
      if (!this.container) return;
      this.ready = true;
      this.bindFilters();
      this.render();
    },

    bindFilters() {
      this.filters.forEach((button) => {
        button.addEventListener('click', () => {
          this.activeFilter = button.dataset.filter || 'all';
          this.filters.forEach((item) => {
            item.classList.toggle('active', item === button);
            item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
          });
          this.render();
        });
      });
    },

    render() {
      if (!this.container) return;
      const lang = AppState.language === 'ar' ? 'ar' : 'en';
      const statusLabels = {
        production: { ar: 'جاهز للعرض', en: 'Portfolio-ready' },
        active: { ar: 'قيد التطوير', en: 'Active development' },
        prototype: { ar: 'نموذج تجريبي', en: 'Prototype' }
      };
      const labels = {
        repository: lang === 'ar' ? 'المستودع' : 'Repository',
        categoryWeb: lang === 'ar' ? 'تطوير الويب' : 'Web development',
        categoryTools: lang === 'ar' ? 'أدوات هندسية' : 'Engineering tools'
      };

      this.container.replaceChildren();
      this.projects
        .filter((project) => this.activeFilter === 'all' || project.category === this.activeFilter)
        .forEach((project) => {
          const card = document.createElement('article');
          card.className = 'project-card reveal fade-bottom';
          card.dataset.category = project.category;

          const image = document.createElement('div');
          image.className = 'project-image project-image-placeholder';
          image.setAttribute('role', 'img');
          image.setAttribute('aria-label', project.title[lang]);
          image.textContent = project.short;

          const content = document.createElement('div');
          content.className = 'project-content';

          const tags = document.createElement('div');
          tags.className = 'project-tags';
          const status = document.createElement('span');
          status.className = `project-tag project-status project-status-${project.status}`;
          status.textContent = statusLabels[project.status][lang];
          tags.appendChild(status);
          project.technologies.forEach((technology) => {
            const tag = document.createElement('span');
            tag.className = 'project-tag';
            tag.textContent = technology;
            tags.appendChild(tag);
          });

          const title = document.createElement('h3');
          title.className = 'project-title';
          title.textContent = project.title[lang];
          const description = document.createElement('p');
          description.className = 'project-description';
          description.textContent = project.description[lang];

          const links = document.createElement('div');
          links.className = 'project-links';
          const repository = document.createElement('a');
          repository.className = 'btn btn-primary';
          repository.href = project.repo;
          repository.target = '_blank';
          repository.rel = 'noopener noreferrer';
          repository.textContent = labels.repository;
          repository.setAttribute('aria-label', `${labels.repository}: ${project.title[lang]}`);
          links.appendChild(repository);

          content.append(tags, title, description, links);
          card.append(image, content);
          this.container.appendChild(card);
        });
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم التاسع عشر: الأحداث
  // Section 19: Event Handlers
  // ═══════════════════════════════════════════════════════════════════

  const EventHandlers = {
    init() {
      // إغلاق النماذج المنبثقة عند الضغط على ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && AppState.currentModal) {
          Modal.close();
        }
      });

      // إغلاق النماذج المنبثقة عند النقر خارجها
      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            Modal.close(`#${overlay.id}`);
          }
        });
      });

      // تعطيل الروابط التالفة
      document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    }
  };

  // ═══════════════════════════════════════════════════════════════════
  // القسم التاسع عشر: التهيئة النهائية
  // Section 19: Final Initialization
  // ═══════════════════════════════════════════════════════════════════

  function init() {
    // إظهار loader
    const loader = Utils.$('.loader');
    if (loader) {
      document.body.style.overflow = 'hidden';
    }

    // تهيئة جميع الوحدات
    ThemeManager.init();
    LanguageManager.init();
    Navigation.init();
    SettingsPanel.init();
    Modal.init();
    ProjectCatalog.init();
    ImageViewer.init();
    // FormValidator هو المعالج الوحيد لنموذج الاتصال لتجنب الإرسال المزدوج.
    CodeEditor.init();
    AIChat.init();
    InteractiveTools.init();
    Animations.init();
    ProgressBars.init();
    TypingEffect.init();
    LoadingManager.init();
    ContentProtection.init();
    EventHandlers.init();

    // تحديث واجهة المستخدم
    ThemeManager.updateToggleButton();
    LanguageManager.updateLanguageButton();

    console.log('✅ تم تهيئة جميع وظائف الموقع بنجاح');
    console.log('👤 المستخدم: عبدالاله عثمان غويث');
    console.log('🌐 اللغة: ' + (AppState.language === 'ar' ? 'العربية' : 'English'));
    console.log('🎨 الثيم: ' + (AppState.theme === 'dark' ? 'الداكن' : 'الفاتح'));
  }

  // تشغيل عند تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ═══════════════════════════════════════════════════════════════════
  // القسم العشرون: الدوال العامة
  // Section 20: Global Functions
  // ═══════════════════════════════════════════════════════════════════

  // جعل الدوال متاحة عالمياً
  window.ThemeManager = ThemeManager;
  window.LanguageManager = LanguageManager;
  window.Navigation = Navigation;
  window.SettingsPanel = SettingsPanel;
  window.Modal = Modal;
  window.ProjectCatalog = ProjectCatalog;
  window.ImageViewer = ImageViewer;
  window.CodeEditor = CodeEditor;
  window.AIChat = AIChat;
  window.Utils = Utils;

})();
