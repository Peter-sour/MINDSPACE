document.addEventListener("DOMContentLoaded", function() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialDots = document.querySelectorAll('.slider-dot');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentTestimonial = 0;

    if (testimonialSlider && testimonialDots.length > 0 && testimonialSlides.length > 0) {
        // Function to update testimonial slider
        function updateTestimonialSlider() {
            // Calculate the slide positions
            const slidePosition = -currentTestimonial * 75 + '%';
            testimonialSlider.style.transform = `translateX(${slidePosition})`;

            // Update dots
            testimonialDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentTestimonial);
            });
        }


        // Add click event to dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentTestimonial = index;
                updateTestimonialSlider();
            });
        });

        // Auto-rotate testimonials every 5 seconds
        setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            updateTestimonialSlider();
        }, 5000);
    }
});
