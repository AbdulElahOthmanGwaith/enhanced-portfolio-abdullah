/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║          Form Validation Module                                  ║
  ║          وحدة التحقق من صحة النماذج                              ║
  ║                                                                  ║
  ║          This module provides client-side form validation        ║
  ║          with user-friendly error messages.                      ║
  ╚══════════════════════════════════════════════════════════════════╝
*/

(function() {
  'use strict';

  const FormValidator = {
    // Configuration
    config: {
      formSelector: '.contact-form',
      errorClass: 'form-error',
      successClass: 'form-success',
      errorMessageClass: 'error-message'
    },

    // Validation rules
    rules: {
      name: {
        required: true,
        minLength: 3,
        pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/,
        messages: {
          required: 'الاسم مطلوب / Name is required',
          minLength: 'الاسم يجب أن يكون 3 أحرف على الأقل / Name must be at least 3 characters',
          pattern: 'الاسم يجب أن يحتوي على أحرف فقط / Name should contain only letters'
        }
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        messages: {
          required: 'البريد الإلكتروني مطلوب / Email is required',
          pattern: 'البريد الإلكتروني غير صحيح / Invalid email format'
        }
      },
      subject: {
        required: true,
        minLength: 5,
        messages: {
          required: 'الموضوع مطلوب / Subject is required',
          minLength: 'الموضوع يجب أن يكون 5 أحرف على الأقل / Subject must be at least 5 characters'
        }
      },
      message: {
        required: true,
        minLength: 10,
        messages: {
          required: 'الرسالة مطلوبة / Message is required',
          minLength: 'الرسالة يجب أن تكون 10 أحرف على الأقل / Message must be at least 10 characters'
        }
      }
    },

    // Initialize the form validator
    init() {
      const form = document.querySelector(this.config.formSelector);
      if (!form) return;

      this.form = form;
      this.attachEventListeners();
    },

    // Attach event listeners
    attachEventListeners() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Real-time validation on blur
      const inputs = this.form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearError(input));
      });
    },

    // Handle form submission
    handleSubmit(e) {
      e.preventDefault();

      const inputs = this.form.querySelectorAll('input, textarea');
      let isValid = true;

      // Validate all fields
      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        this.handleSuccess();
      }
    },

    // Validate a single field
    validateField(field) {
      const fieldName = field.getAttribute('placeholder')?.toLowerCase() || field.name;
      const value = field.value.trim();
      const rules = this.getFieldRules(field);

      if (!rules) return true;

      // Check required
      if (rules.required && !value) {
        this.showError(field, rules.messages.required);
        return false;
      }

      // Check minimum length
      if (rules.minLength && value.length < rules.minLength) {
        this.showError(field, rules.messages.minLength);
        return false;
      }

      // Check pattern
      if (rules.pattern && value && !rules.pattern.test(value)) {
        this.showError(field, rules.messages.pattern);
        return false;
      }

      this.clearError(field);
      return true;
    },

    // Get validation rules for a field
    getFieldRules(field) {
      const placeholder = field.getAttribute('placeholder')?.toLowerCase() || '';
      
      if (placeholder.includes('اسم') || placeholder.includes('name')) return this.rules.name;
      if (placeholder.includes('بريد') || placeholder.includes('email')) return this.rules.email;
      if (placeholder.includes('موضوع') || placeholder.includes('subject')) return this.rules.subject;
      if (placeholder.includes('رسالة') || placeholder.includes('message')) return this.rules.message;
      
      return null;
    },

    // Show error message
    showError(field, message) {
      field.classList.add(this.config.errorClass);
      field.classList.remove(this.config.successClass);

      // Remove existing error message
      const existingError = field.parentElement.querySelector(`.${this.config.errorMessageClass}`);
      if (existingError) existingError.remove();

      // Add new error message
      const errorDiv = document.createElement('div');
      errorDiv.className = this.config.errorMessageClass;
      errorDiv.textContent = message;
      errorDiv.setAttribute('role', 'alert');
      field.parentElement.appendChild(errorDiv);
    },

    // Clear error message
    clearError(field) {
      field.classList.remove(this.config.errorClass);
      field.classList.add(this.config.successClass);

      const errorDiv = field.parentElement.querySelector(`.${this.config.errorMessageClass}`);
      if (errorDiv) errorDiv.remove();
    },

    // Handle successful form submission
    handleSuccess() {
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success-message';
      successMessage.textContent = 'تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا. / Your message has been sent successfully! Thank you for contacting us.';
      successMessage.setAttribute('role', 'status');

      // Insert success message
      this.form.parentElement.insertBefore(successMessage, this.form);

      // Reset form
      this.form.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => FormValidator.init());
  } else {
    FormValidator.init();
  }

  // Export for use in other modules
  window.FormValidator = FormValidator;
})();
