# FTC队伍网站使用指南 v2.0

## 🎨 新版特色

- **酷炫的科技风格设计** - 深色主题 + 霓虹色彩 + 动画效果
- **按赛季组织内容** - 所有资料按赛季分类，一目了然
- **响应式设计** - 完美适配手机、平板和电脑
- **交互式赛季切换** - 点击按钮即可切换不同赛季的内容

## 📁 文件结构

```
ftc-website/
├── index.html          # 首页 - 最新动态和快速导航
├── about.html          # 关于我们 - 队伍介绍和团队成员
├── seasons.html        # 赛季档案 - 按赛季展示所有内容（核心页面）
├── sponsors.html       # 赞助商 - 赞助商信息
├── style.css           # 样式文件 - 红黑科技风格
├── script.js           # JavaScript - 赛季切换功能
├── images/             # 图片文件夹
│   ├── 2026-robot-main.jpg  # 2026赛季机器人主图（概述卡片）
│   ├── 2026-robot.jpg       # 2026赛季机器人照片
│   ├── 2026-team.jpg        # 2026赛季团队照片
│   ├── 2025-robot-main.jpg  # 2025赛季机器人主图
│   ├── 2025-robot.jpg       # 2025赛季机器人照片
│   ├── 2024-robot-main.jpg  # 2024赛季机器人主图
│   └── 2024-robot.jpg       # 2024赛季机器人照片
└── downloads/          # 下载文件夹
    ├── 2026-cad.zip    # 2026赛季CAD文件
    ├── 2026-code.zip   # 2026赛季代码
    ├── 2025-cad.zip    # 2025赛季CAD文件
    └── 2025-code.zip   # 2025赛季代码
```

## 🎯 核心功能：赛季档案页面

**seasons.html** 是网站的核心页面，包含：

1. **赛季选择器** - 点击按钮切换不同赛季
2. **机器人设计** - 每个赛季的机器人介绍和技术规格
3. **开源资料** - CAD文件和代码下载链接
4. **赛季成就** - 奖项和比赛成绩
5. **媒体资料** - 照片和视频展示

所有内容按赛季分类，切换赛季时会显示对应的内容。

## 🎨 如何修改网站内容

### 1. 修改队伍基本信息

在每个HTML文件中找到并替换：
- `FTC队伍名称` → 你的队伍名称
- `#12345` → 你的队伍编号
- `team@example.com` → 你的邮箱
- `FTC_Team_12345` → 你的微信号

### 2. 添加新赛季内容

打开 `seasons.html`，复制一个赛季的代码块，修改：

```html
<!-- 新赛季模板 -->
<button class="season-btn" data-season="season-2027">2026-2027赛季</button>

<div id="season-2027" class="season-content">
    <h3>🤖 机器人设计</h3>
    <!-- 添加机器人信息 -->

    <h3>🏅 赛季成就</h3>
    <!-- 添加成就列表 -->

    <h3>📸 媒体资料</h3>
    <!-- 添加照片和视频 -->
</div>
```

### 3. 添加机器人主图

每个赛季的"机器人概述"卡片会显示一张大图。

1. 把机器人照片或渲染图放到 `images/` 文件夹，命名格式：`年份-robot-main.jpg`
   - 例如：`2026-robot-main.jpg`, `2025-robot-main.jpg`
   - 建议尺寸：至少 800x600 像素
   - 建议格式：JPG 或 PNG

2. 图片会自动显示在"机器人概述"卡片中，带有红色边框和悬停放大效果

### 4. 添加更多照片

1. 把照片放到 `images/` 文件夹，建议命名格式：`年份-描述.jpg`
   - 例如：`2026-robot.jpg`, `2026-team.jpg`

2. 在 `seasons.html` 的媒体资料部分添加：
```html
<div class="media-item">
    <img src="images/2026-robot.jpg" alt="2026机器人">
    <p>机器人全貌</p>
</div>
```

### 5. 添加视频

在 `seasons.html` 中找到视频部分，替换视频ID：

```html
<div class="media-item">
    <iframe src="https://www.youtube.com/embed/你的视频ID"
            frameborder="0" allowfullscreen></iframe>
    <p>视频描述</p>
</div>
```

**如何获取YouTube视频ID：**
- 视频链接：`https://www.youtube.com/watch?v=ABC123`
- 视频ID就是：`ABC123`

**如果使用Bilibili：**
```html
<iframe src="//player.bilibili.com/player.html?bvid=BV号"
        frameborder="0" allowfullscreen></iframe>
```

### 6. 添加下载文件

1. 把文件放到 `downloads/` 文件夹，建议命名：`年份-类型.zip`
   - 例如：`2026-cad.zip`, `2026-code.zip`

2. 在 `seasons.html` 中修改下载链接：
```html
<a href="downloads/2026-cad.zip" class="download-btn">📐 下载CAD文件</a>
```

### 7. 修改团队成员

在 `about.html` 中找到团队成员部分，修改：

```html
<div class="member">
    <h4>张三</h4>
    <p>队长</p>
    <p>负责整体协调和战略规划</p>
</div>
```

### 8. 修改颜色主题

打开 `style.css`，在文件开头找到颜色变量：

```css
:root {
    --primary: #FF0000;      /* 主色 - 鲜红色 */
    --secondary: #CC0000;    /* 副色 - 深红色 */
    --accent: #999999;       /* 强调色 - 银灰色 */
}
```

修改这些颜色代码即可改变整个网站的配色。当前使用的是红黑配色，与机器人保持一致。

## 🌐 如何查看网站

### 本地查看
双击 `index.html` 文件，或使用命令：
```bash
open /Users/xinyue/Documents/FTC/ftc-website/index.html
```

### 测试赛季切换功能
1. 打开 `seasons.html`
2. 点击不同的赛季按钮
3. 观察内容切换效果

## 🚀 如何发布到网上

### 方法1：GitHub Pages（推荐，免费）

1. 在GitHub创建新仓库
2. 上传所有文件：
```bash
cd /Users/xinyue/Documents/FTC/ftc-website
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

3. 在GitHub仓库设置中启用Pages
4. 网站地址：`https://你的用户名.github.io/仓库名`

### 方法2：Netlify（更简单）

1. 访问 netlify.com
2. 拖拽整个 `ftc-website` 文件夹到网页
3. 自动部署完成

## 💡 设计特色说明

### 视觉效果
- **深色科技风** - 深色背景 + 霓虹色彩
- **渐变文字** - 标题使用彩色渐变
- **发光效果** - 按钮和卡片有发光动画
- **悬停动画** - 鼠标悬停时元素会上浮

### 字体
- **标题字体：** Orbitron（科技感）
- **正文字体：** Rajdhani（现代感）

### 交互效果
- 导航栏悬停有光效扫过
- 卡片悬停会上浮并发光
- 赛季切换有淡入动画
- 背景有微妙的呼吸动画

## 📝 内容更新清单

### 必须修改的内容
- [ ] 所有页面的队伍名称
- [ ] 队伍编号（about.html）
- [ ] 联系方式（所有页面底部）
- [ ] 团队成员信息（about.html）

### 需要添加的内容
- [ ] 上传机器人主图到 images/ 文件夹（2026-robot-main.jpg等）
- [ ] 上传机器人照片到 images/ 文件夹
- [ ] 上传团队照片到 images/ 文件夹
- [ ] 添加YouTube/Bilibili视频链接
- [ ] 上传CAD文件到 downloads/ 文件夹
- [ ] 上传代码文件到 downloads/ 文件夹
- [ ] 更新每个赛季的成就列表
- [ ] 添加赞助商信息

### 可选内容
- [ ] 修改配色方案
- [ ] 添加更多赛季
- [ ] 添加社交媒体链接

## 🎯 使用技巧

1. **按赛季组织文件** - 照片和下载文件都用年份命名，方便管理
2. **定期更新** - 每次比赛后及时更新成就和照片
3. **保持简洁** - 不要放太多内容，突出重点
4. **测试链接** - 发布前检查所有下载链接是否有效

## 🆘 常见问题

**Q: 赛季切换按钮不工作？**
A: 确保 `script.js` 文件已正确链接，检查HTML底部是否有 `<script src="script.js"></script>`

**Q: 图片不显示？**
A: 检查图片路径和文件名是否正确，确保图片在 `images/` 文件夹中

**Q: 视频无法播放？**
A: 确认视频ID正确，YouTube视频需要允许嵌入

**Q: 网站在手机上显示不正常？**
A: 网站已经是响应式设计，如果有问题请清除浏览器缓存

**Q: 如何修改动画效果？**
A: 在 `style.css` 中搜索 `@keyframes`，可以修改或删除动画

## 🎉 完成！

你的FTC队伍网站已经准备好了！现在开始添加你的内容，让它成为展示你们队伍的完美平台。

有任何问题随时查看这个文档，或者联系我获取帮助。

祝你的队伍在FTC竞赛中取得好成绩！🏆
