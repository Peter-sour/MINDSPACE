    // Fungsi animasi counter
    function counter() {
        document.querySelectorAll('.stat-number').forEach(function(counter) {
            let count = 0;
            const target = +counter.getAttribute('data-count');
            const step = target / 100;

            const updateCount = () => {
                if (count < target) {
                    count += step;
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Trigger counter saat bagian .stats muncul di layar (1x saja)
    let statsShown = false;
    window.addEventListener('scroll', () => {
        const stats = document.querySelector('.stats');
        const rect = stats.getBoundingClientRect();

        if (!statsShown && rect.top < window.innerHeight) {
            statsShown = true;
            counter();
        }
    });
