// 🐝 BioBuzz Cursor Follower - INTO THE DEEP Season Theme
(function() {
    // 创建蜜蜂元素
    const bee = document.createElement('div');
    bee.className = 'cursor-bee';
    bee.innerHTML = '🐝';
    document.body.appendChild(bee);

    // 蜜蜂位置和目标位置
    let beeX = 0;
    let beeY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;

    // 跟踪是否在页面内
    let isInWindow = false;

    // 追踪鼠标位置
    document.addEventListener('mousemove', function(e) {
        lastMouseX = mouseX;
        mouseX = e.clientX;
        mouseY = e.clientY;
        isInWindow = true;
    });

    // 鼠标离开页面时隐藏
    document.addEventListener('mouseleave', function() {
        isInWindow = false;
        bee.style.opacity = '0';
    });

    // 鼠标进入页面时显示
    document.addEventListener('mouseenter', function() {
        isInWindow = true;
        bee.style.opacity = '1';
    });

    // 平滑跟随动画
    function animateBee() {
        if (isInWindow) {
            // 缓动效果 - 蜜蜂会慢慢追上鼠标
            const delay = 0.15; // 延迟系数，值越小跟随越快

            // 保存旧位置用于判断方向
            const oldBeeX = beeX;

            beeX += (mouseX - beeX) * delay;
            beeY += (mouseY - beeY) * delay;

            // 判断蜜蜂移动方向（根据蜜蜂实际移动方向，不是鼠标）
            const isMovingRight = beeX > oldBeeX;

            // 根据方向翻转蜜蜂（scaleX: -1 是水平翻转）
            // 蜜蜂emoji默认朝左，所以向左时用-1，向右时用1
            const scaleX = isMovingRight ? -1 : 1;

            // 更新蜜蜂位置和翻转
            bee.style.left = beeX + 'px';
            bee.style.top = beeY + 'px';
            bee.style.transform = `translate(-50%, -50%) scaleX(${scaleX})`;
        }

        requestAnimationFrame(animateBee);
    }

    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        // 初始位置设在屏幕中心
        beeX = window.innerWidth / 2;
        beeY = window.innerHeight / 2;
        mouseX = beeX;
        mouseY = beeY;

        // 启动动画
        animateBee();
    });
})();