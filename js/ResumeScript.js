<script>
document.addEventListener('DOMContentLoaded', function () {
    const educationItems = document.querySelectorAll('.timeline-item');

    educationItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'var(--hover-color)';
            item.style.borderLeftColor = 'var(--primary-color)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
            item.style.borderLeftColor = 'var(--timeline-color)';
        });
    });
});
</script>