# GitHub Pages 配置指南

## ✅ 代码已推送成功！

你的仓库：https://github.com/WXY7050/ftc-19705-wxyz-website

---

## 📝 现在配置 GitHub Pages（3分钟）

### 第一步：启用 GitHub Pages

1. **打开仓库页面：**
   https://github.com/WXY7050/ftc-19705-wxyz-website

2. **点击 Settings（设置）**
   - 在仓库顶部导航栏，点击 "Settings"

3. **找到 Pages 设置：**
   - 在左侧菜单找到 "Pages"（在 "Code and automation" 部分）

4. **配置部署源：**
   - **Source（来源）：** 选择 "Deploy from a branch"
   - **Branch（分支）：** 选择 "main"
   - **文件夹：** 选择 "/ (root)"
   - 点击 **Save（保存）**

5. **等待部署：**
   - 页面顶部会显示：`Your site is live at https://wxy7050.github.io/ftc-19705-wxyz-website/`
   - 等待 1-2 分钟让部署完成
   - 刷新页面查看状态

---

### 第二步：配置自定义域名 wxyz19705.xyz

**在 GitHub Pages 设置中：**

1. 在 Pages 页面找到 **Custom domain（自定义域名）**
2. 输入：`wxyz19705.xyz`
3. 点击 **Save（保存）**
4. 等待 DNS 检查（可能需要几分钟）
5. DNS 检查通过后，勾选 **Enforce HTTPS（强制 HTTPS）**

---

### 第三步：更新 Netlify DNS 配置

现在域名还指向 Netlify，需要改成指向 GitHub Pages。

**在 Netlify 控制台：**

1. 进入你的网站 → **Domain settings**
2. 找到 DNS records
3. **修改/添加以下记录：**

   **删除或修改现有的 A 记录，改成 GitHub Pages 的 IP：**
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   ```
   
   **再添加另外 3 个 A 记录：**
   ```
   类型: A
   名称: @
   值: 185.199.109.153
   
   类型: A
   名称: @
   值: 185.199.110.153
   
   类型: A
   名称: @
   值: 185.199.111.153
   ```
   
   **修改 CNAME 记录：**
   ```
   类型: CNAME
   名称: www
   值: wxy7050.github.io
   ```

4. **保存所有更改**

---

## ⏰ 等待 DNS 生效

- **时间：** 10分钟 - 24小时
- **检查命令：**
  ```bash
  dig wxyz19705.xyz +short
  ```
  看到 `185.199.xxx.xxx` 的 IP 就说明生效了

---

## 🎉 完成后

你的网站将在以下地址访问：
- **主域名：** https://wxyz19705.xyz
- **www域名：** https://www.wxyz19705.xyz
- **GitHub备用：** https://wxy7050.github.io/ftc-19705-wxyz-website/

---

## 🔄 以后如何更新网站

在本地修改文件后：

```bash
cd /Users/xinyue/Documents/FTC/ftc-website
git add .
git commit -m "更新说明"
git push
```

推送后 1-2 分钟，GitHub Pages 会自动更新网站！

---

## 💡 团队协作

团队成员可以：
1. Clone 仓库：`git clone https://github.com/WXY7050/ftc-19705-wxyz-website.git`
2. 修改文件
3. 推送更新：`git push`

你需要在 GitHub 仓库设置中给他们添加权限。

---

**现在去浏览器完成 Pages 设置吧！完成后告诉我。**
