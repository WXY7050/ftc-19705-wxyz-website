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

// 🎮 彩蛋入口 1：按键序列 "wxyz"
(function() {
    let keySequence = [];
    const secretCode = ['w', 'x', 'y', 'z'];

    document.addEventListener('keydown', function(e) {
        // 忽略在输入框中的按键
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }

        keySequence.push(e.key.toLowerCase());

        // 只保留最近的4个按键
        if (keySequence.length > 4) {
            keySequence.shift();
        }

        // 检查是否匹配密码
        if (keySequence.join('') === secretCode.join('')) {
            // 触发彩蛋！
            window.location.href = '/stats.html';
        }
    });
})();

// 🎮 彩蛋入口 2：快速点击 LOGO 5 次
(function() {
    const logo = document.querySelector('nav h1');
    if (!logo) return;

    let clickCount = 0;
    let clickTimer = null;

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;

        // 清除之前的计时器
        if (clickTimer) {
            clearTimeout(clickTimer);
        }

        // 如果在1秒内点击5次，触发彩蛋
        if (clickCount >= 5) {
            // 触发彩蛋！
            window.location.href = '/stats.html';
            clickCount = 0;
        } else {
            // 1秒后重置计数
            clickTimer = setTimeout(function() {
                clickCount = 0;
            }, 1000);
        }
    });
})();
