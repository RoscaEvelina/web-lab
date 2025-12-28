document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form-container');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const destinationInput = document.getElementById('destination');
        const destinatie = destinationInput.value.trim().toLowerCase();
        switch (destinatie) {
            case 'paris':
                window.location.href = 'destinatii/paris.html';
                break;
            case 'santorini':
                window.location.href = 'destinatii/santorini.html';
                break;
            case 'maldive':
                window.location.href = 'destinatii/maldive.html';
                break;
            default:
                searchForm.submit();
                break;
        }
    });
});

