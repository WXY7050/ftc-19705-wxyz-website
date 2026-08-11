// Scroll to season detail
function scrollToSeason(seasonId) {
    const seasonElement = document.getElementById(seasonId);
    if (seasonElement) {
        // 计算偏移量，留出导航栏空间
        const offset = 100;
        const elementPosition = seasonElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Google Analytics 下载跟踪
document.addEventListener('DOMContentLoaded', function() {
    // 跟踪所有下载按钮和文件链接
    const downloadButtons = document.querySelectorAll('a.download-btn, a[href*=".zip"], a[href*=".pdf"]');

    downloadButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const fileName = this.href.split('/').pop();
            const fileType = fileName.split('.').pop();

            // 发送事件到 Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'file_download', {
                    'event_category': 'Downloads',
                    'event_label': fileName,
                    'file_type': fileType
                });
            }
        });
    });
});
