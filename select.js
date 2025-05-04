$(document).ready(function () {
    if ($('.select-basic').length) $('.select-basic').select2();
    if ($('.select-multiple').length) $('.select-multiple').select2({ placeholder: 'Select...' });
    if ($('.select-placeholder').length) $('.select-placeholder').select2({ placeholder: 'Select a state', allowClear: true });
    if ($('.select-multi-placeholder').length) $('.select-multi-placeholder').select2({ placeholder: 'Select...' });
  
    function formatAvatar(option) {
      if (!option.id) return option.text;
      const img = $(option.element).data('img');
      if (!img) return option.text;
      return $(`<span class="avatar-option"><img src="${img}" /> ${option.text}</span>`);
    }
  
    if ($('.select-templating').length) $('.select-templating').select2({ templateResult: formatAvatar });
    if ($('.select-templating-selection').length) {
      $('.select-templating-selection').select2({
        templateSelection: formatAvatar,
        templateResult: formatAvatar
      });
    }
  
    if ($('#max-select').length) {
      $('#max-select').select2({
        maximumSelectionLength: 3,
        placeholder: 'Select...'
      });
    }
  
    if ($('#disable-select-1').length) $('#disable-select-1').select2();
    if ($('#disable-select-2').length) $('#disable-select-2').select2({ placeholder: 'Select...' });
  });
  