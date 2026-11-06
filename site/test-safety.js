// Standalone test safety only. Never send a real email or change a real register.
(() => {
  const forbidden = button => button && (button.textContent.includes('Begehung per E-Mail senden') || button.textContent.includes('Unveränderten Versand prüfen / erneut anfragen'));
  function disableMail() {
    for (const button of document.querySelectorAll('button')) {
      if (forbidden(button) && !button.disabled) button.disabled = true;
    }
  }
  document.addEventListener('submit', event => {
    if ([...event.target.querySelectorAll('button')].some(forbidden)) {
      event.preventDefault(); event.stopImmediatePropagation();
      alert('In dieser Testversion ist der echte E-Mail-Versand gesperrt.');
    }
  }, true);
  document.addEventListener('click', event => {
    if (forbidden(event.target.closest?.('button'))) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  new MutationObserver(disableMail).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['disabled'] });
  document.addEventListener('DOMContentLoaded', disableMail);
})();
