document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation for the cards
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
        // Initial state before animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Dynamic delay based on index
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 + (index * 100)); // Stagger by 100ms
    });

    // Reveal animation for hero section content
    const heroContent = document.querySelectorAll('.brand-title, .brand-subtitle, .logo');
    heroContent.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 50 + (index * 150));
    });

    // Action buttons pop-in animation
    const actions = document.querySelector('.action-buttons');
    if (actions) {
        actions.style.opacity = '0';
        actions.style.transform = 'scale(0.95)';
        setTimeout(() => {
            actions.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            actions.style.opacity = '1';
            actions.style.transform = 'scale(1)';
        }, 600);
    }
});
