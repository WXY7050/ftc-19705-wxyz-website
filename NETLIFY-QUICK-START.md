# Netlify 快速部署 + 自定义域名配置指南

## 🚀 立即部署到 Netlify

### 方法：拖拽上传（最快）

1. **打开 Netlify Drop**
   访问：https://app.netlify.com/drop
   
2. **拖拽文件夹**
   - 找到文件夹：`/Users/xinyue/Documents/FTC/ftc-website`
   - 将整个文件夹拖到网页中
   - 等待上传（约30秒）

3. **获取临时网址**
   上传完成后会得到类似：`random-name-12345.netlify.app`
   
   你可以：
   - 点击 "Site settings" → "Change site name" 
   - 改成更好记的名字，如：`wxyz19705.netlify.app`

---

## 🌐 配置自定义域名：wxyz19705.xyz

### 在 Netlify 中添加域名

1. **进入网站设置**
   - 在 Netlify 控制台，点击你的网站
   - 点击 "Domain settings"

2. **添加自定义域名**
   - 点击 "Add custom domain"
   - 输入：`wxyz19705.xyz`
   - 点击 "Verify"
   - 点击 "Add domain"

3. **添加 www 子域名（可选但推荐）**
   - 再次点击 "Add domain alias"
   - 输入：`www.wxyz19705.xyz`
   - 点击 "Add domain"

### 在 Spaceship 配置 DNS

1. **登录 Spaceship**
   访问：https://www.spaceship.com

2. **进入 DNS 设置**
   - 找到域名 `wxyz19705.xyz`
   - 点击 "DNS" 或 "Manage DNS"

3. **添加以下 DNS 记录：**

   **记录 1 - 主域名指向 Netlify**
   ```
   类型 (Type): A
   名称 (Name): @ 或留空
   值 (Value): 75.2.60.5
   TTL: 3600 或 Automatic
   ```

   **记录 2 - www 子域名指向 Netlify**
   ```
   类型 (Type): CNAME
   名称 (Name): www
   值 (Value): <你的网站名>.netlify.app
   例如: wxyz19705.netlify.app
   TTL: 3600 或 Automatic
   ```

4. **保存设置**
   点击 "Save" 或 "Add Record"

### 等待 DNS 生效

- **通常需要：** 10分钟 - 24小时
- **快的话：** 可能几分钟就好了

### 验证 DNS 是否生效

在终端运行：
```bash
dig wxyz19705.xyz
dig www.wxyz19705.xyz
```

看到 IP 地址 `75.2.60.5` 就说明生效了。

### 启用 HTTPS

DNS 生效后，回到 Netlify：
1. 进入 "Domain settings"
2. 找到 "HTTPS" 部分
3. 点击 "Verify DNS configuration"
4. 等待几分钟，Netlify 会自动配置 Let's Encrypt SSL 证书
5. 启用 "Force HTTPS"（强制使用 HTTPS）

---

## ✅ 完成！

现在你的网站可以通过以下地址访问：
- `https://wxyz19705.xyz` ✨
- `https://www.wxyz19705.xyz`
- `https://wxyz19705.netlify.app`（备用）

---

## 🔄 如何更新网站内容

### 当前阶段（拖拽上传）：

1. 在本地修改文件
2. 进入 Netlify 控制台 → "Deploys"
3. 将更新后的整个文件夹拖进 "Drop zone"
4. 等待30秒，网站自动更新

### 后续升级到 GitHub 自动部署：

详见 `DEPLOY.md` 中的 GitHub Pages 部分。