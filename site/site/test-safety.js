// Safety guard for this standalone test package only. Production source is unchanged.
(() => {
  function disableMail() {
    for (const button of document.querySelectorAll('button[type="submit"]')) {
      if (button.textContent.includes('Begehung per E-Mail senden')) {
        if (!button.disabled) button.disabled = true;
        if (button.title !== 'In dieser Testversion ist E-Mail-Versand gesperrt.') button.title = 'In dieser Testversion ist E-Mail-Versand gesperrt.';
      }
    }
  }
  new MutationObserver(disableMail).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['disabled'] });
  document.addEventListener('DOMContentLoaded', disableMail);
})();
