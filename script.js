function showEmptyMessage() {
    alert("Please Insert Text!");
}

function smoothScrollToTarget() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                const currentScroll = window.pageYOffset;
                const distance = offsetTop - currentScroll;

                const duration = 400;

                const startTime = performance.now();
                requestAnimationFrame(function animateScroll(time) {
                    const elapsedTime = time - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    window.scrollTo(0, currentScroll + distance * progress);

                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    }
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    smoothScrollToTarget();
});

function showMessageAndClearForm() {
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const phoneInput = document.querySelector('input[placeholder="Phone Number"]');
    const messageInput = document.querySelector('textarea');
    
    if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || messageInput.value === "") {
        showEmptyMessage();
    } else {
        alert("Message Successfully Sent!");
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
    }
}

const sendMessageBtn = document.getElementById("sendMessageBtn");
sendMessageBtn.addEventListener("click", showMessageAndClearForm);