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
            case 'dubai':
                window.location.href = 'destinatii/dubai.html';
                break;
            case 'roma':
                window.location.href = 'destinatii/roma.html';
                break;
            case 'tokyo':
                window.location.href = 'destinatii/tokyo.html';
                break;
            case 'barcelona':
                window.location.href = 'destinatii/barcelona.html';
                break;
            case 'istanbul':
                window.location.href = 'destinatii/istanbul.html';
                break;
            default:
                searchForm.submit();
                break;
        }
    });
});

