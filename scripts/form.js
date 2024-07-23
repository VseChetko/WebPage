document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.consentForm');

    forms.forEach(form => {
        const submitBtn = form.querySelector('.submitBtn');
        const nameInput = form.querySelector('.name');
        const phoneInput = form.querySelector('.phone');
        const consentCheckbox = form.querySelector('.consent');

        const checkFormValidity = () => {
            const isFormValid = form.checkValidity();
            submitBtn.disabled = !isFormValid;
        };

        nameInput.addEventListener('input', checkFormValidity);
        phoneInput.addEventListener('input', checkFormValidity);
        consentCheckbox.addEventListener('change', checkFormValidity);

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            if (form.checkValidity()) {
          
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                fetch('сервер', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    if (form.classList.contains('form1')) {
                        handleSuccessForm1(data);
                    } else if (form.classList.contains('form2')) {
                        handleSuccessForm2(data);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                   
                });
            }
        });

        checkFormValidity();
    });

    const handleSuccessForm1 = (data) => {
        console.log('Form 1 Success:', data);
      
    };

    const handleSuccessForm2 = (data) => {
        document.querySelector('.modal-succses').style.display = 'flex';
        forms[2].style.display = 'none';
    };
});
