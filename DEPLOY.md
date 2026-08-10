# 19705 WXYZ 网站部署指南

## 方法一：GitHub Pages（推荐用于团队协作）

### 1. 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name:** `ftc-19705-website` （或其他你喜欢的名字）
   - **Description:** `FTC Team 19705 WXYZ Official Website`
   - **可见性:** Public（公开）
   - 不要勾选 "Add a README file"（我们已经有了）

3. 点击 "Create repository"

### 2. 推送代码到 GitHub

创建好仓库后，在终端运行以下命令（替换成你的用户名和仓库名）：

```bash
cd /Users/xinyue/Documents/FTC/ftc-website
git remote add origin https://github.com/你的用户名/ftc-19705-website.git
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 "Branch" 下拉菜单中选择 **main**
5. 文件夹选择 **/ (root)**
6. 点击 **Save**

几分钟后，网站就会发布到：
- `https://你的用户名.github.io/ftc-19705-website`

### 4. 配置自定义域名（GitHub Pages）

**A. 购买域名后：**

1. 在域名服务商处添加 DNS 记录：
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   
   类型: A
   名称: @
   值: 185.199.109.153
   
   类型: A
   名称: @
   值: 185.199.110.153
   
   类型: A
   名称: @
   值: 185.199.111.153
   
   类型: CNAME
   名称: www
   值: 你的用户名.github.io
   ```

2. 在 GitHub Pages 设置中：
   - 在 "Custom domain" 输入框输入你的域名（如 `19705wxyz.com`）
   - 点击 Save
   - 等待 DNS 检查完成（可能需要几分钟到几小时）
   - 勾选 "Enforce HTTPS"（强制 HTTPS）

---

## 方法二：Netlify（推荐用于快速部署）

### 1. 注册 Netlify 账号

访问 https://www.netlify.com/ 并注册账号（可以用 GitHub 账号登录）

### 2. 部署方式 A：拖拽上传

1. 登录后，访问 https://app.netlify.com/drop
2. 将整个 `ftc-website` 文件夹拖到页面中
3. 等待上传和部署完成
4. 你会得到一个类似 `random-name-12345.netlify.app` 的网址

### 3. 部署方式 B：连接 GitHub（推荐，支持自动更新）

前提：已经推送代码到 GitHub

1. 在 Netlify 点击 "Add new site" → "Import an existing project"
2. 选择 "GitHub"
3. 授权 Netlify 访问你的 GitHub
4. 选择 `ftc-19705-website` 仓库
5. 部署设置：
   - **Branch to deploy:** main
   - **Build command:** 留空（静态网站不需要）
   - **Publish directory:** / （或者留空）
6. 点击 "Deploy site"

几分钟后网站就会上线！

### 4. 配置自定义域名（Netlify）

**A. 修改 Netlify 子域名（免费）：**

1. 进入 Site settings → Domain management
2. 点击 "Options" → "Edit site name"
3. 改成 `19705-wxyz.netlify.app`

**B. 使用自定义域名（购买域名后）：**

1. 在 Netlify 的 Domain settings 中点击 "Add custom domain"
2. 输入你的域名（如 `19705wxyz.com`）
3. Netlify 会提供 DNS 配置说明
4. 在域名服务商处添加 DNS 记录：
   ```
   类型: CNAME
   名称: www
   值: your-site.netlify.app
   
   类型: A
   名称: @
   值: 75.2.60.5
   ```
5. 等待 DNS 生效（通常几分钟到24小时）
6. Netlify 会自动启用 HTTPS（Let's Encrypt）

---

## 推荐域名注册商

### 国际域名注册商：
- **Namecheap** (https://www.namecheap.com) - 价格实惠，界面友好
- **Google Domains** (https://domains.google) - 简单易用
- **Cloudflare** (https://www.cloudflare.com/products/registrar/) - 接近成本价

### 国内域名注册商：
- **阿里云（万网）** (https://wanwang.aliyun.com)
- **腾讯云** (https://dnspod.cloud.tencent.com)

**建议域名：**
- `19705wxyz.com`
- `team19705.com`
- `wxyzrobotics.com`

---

## 如何更新网站

### 使用 GitHub Pages：
```bash
cd /Users/xinyue/Documents/FTC/ftc-website
# 修改文件后
git add .
git commit -m "更新内容说明"
git push
```
推送后 1-2 分钟网站会自动更新。

### 使用 Netlify（连接 GitHub）：
和 GitHub Pages 一样，推送到 GitHub 后，Netlify 会自动检测并部署。

### 使用 Netlify（拖拽方式）：
在 Netlify 控制台的 "Deploys" 页面，将更新后的文件夹拖进去即可。

---

## 两种方式对比

| 功能 | GitHub Pages | Netlify |
|------|-------------|---------|
| 免费额度 | 完全免费 | 免费（每月100GB流量） |
| 自定义域名 | ✅ 支持 | ✅ 支持 |
| HTTPS | ✅ 自动 | ✅ 自动 |
| 部署速度 | 1-2分钟 | 30秒-1分钟 |
| CDN | ✅ | ✅ 更快 |
| 适合人群 | 熟悉Git的开发者 | 所有人 |

**建议：** 如果你熟悉 Git 或想学习版本控制 → GitHub Pages
         如果想最快速上线 → Netlify

---

## 故障排查

### GitHub Pages 网站404：
- 检查 Settings → Pages 是否已启用
- 确认分支选择的是 `main`
- 等待几分钟让部署完成

### 自定义域名不生效：
- 使用 `dig 你的域名.com` 检查 DNS 是否生效
- DNS 生效可能需要几小时
- 确认域名服务商的 DNS 记录配置正确

### 网站内容没有更新：
- 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）
- 检查 git push 是否成功
- 查看部署日志确认是否有错误

---

## 需要帮助？

如果遇到问题，可以查看：
- GitHub Pages 文档：https://docs.github.com/pages
- Netlify 文档：https://docs.netlify.com

祝部署顺利！🚀