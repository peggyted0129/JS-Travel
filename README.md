## Fixie_bike 網頁切版 | [Demo](https://peggyted0129.github.io/Fixie_bike/)  

## 指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
 
## 說明

該分支專案預設載入 Bootstrap 與 jQuery 等。

## 資料夾結構

- App # 原始碼
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - js # JavaScript 放置處
    - style # 樣式放置處
  - index.html # 首頁 HTML
  - layout.ejs # Layout ejs
- gulpfile.js # Gulp 原始碼
  - envOptions.js # Gulp 路徑變數
  - index.js # Gulp 核心原始碼

## 部署 gh-pagse 

```cmd
git init
git add .
git commit -m 'first commit'
git remote add origin [GitHub Repositories Url]
git push -u origin master 
```
當將 Gulp 原始碼初次部署到 GitHub 之後就可以輸入 `gulp build` 進入生產模式，當生產完畢之後接下來只需要輸入 `gulp deploy` 即可完成 GitHub Pages 部署。

## 注意事項

開啟gulp專案查看的相關版本，以下是專案的運行環境

- Node v12.18.2
  - 實際測試 Node 12~14 都是可以運行的
  - 查看自己版本指令：`node -v`
- Gulp
  - CLI version: 2.3.0
  - Local version: 4.0.2
  - 查看自己版本指令：`gulp -v`
- git version 2.23.0
  - 查看自己版本指令：`git ---version`
