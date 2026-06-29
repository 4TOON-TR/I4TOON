// ====== انیمیشن ورود کارت‌ها ======
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .featured-card, .update-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 60));
    });
});

console.log('🚀 I4TOON!');