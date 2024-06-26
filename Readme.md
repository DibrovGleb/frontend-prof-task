<div align="center">

# [Demo](https://dibrovgleb.github.io/Vite-react-ts-ghpages-template/) 

</div>

![Vite](https://img.shields.io/badge/vite-181717?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React](https://img.shields.io/badge/React-181717?style=for-the-badge&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/Sass-181717?style=for-the-badge&logo=sass&logoColor=CC6699)
![TypeScript](https://img.shields.io/badge/TypeScript-181717?style=for-the-badge&logo=typescript&logoColor=007ACC)
![Git](https://img.shields.io/badge/-Git-181717?style=for-the-badge&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github)
![GitHub deployments](https://img.shields.io/github/deployments/DibrovGleb/Vite-react-ts-ghpages-template/github-pages?style=for-the-badge&label=gh-pages+status)


## How to use this template

To download the template and start developing run the following commands

```shell
  git clone https://github.com/DibrovGleb/Vite-react-ts-ghpages-template.git
```
```bash
  cd Vite-react-ts-ghpages-template
```
```bash
  npm i
```
```bash
  npm run dev
```

## What you should change to make it works

1. Open the `vite.config.ts` and change `base` property

    ```diff
    - base: "https://dibrovgleb.github.io/Vite-react-ts-ghpages-template/"
    + base: "https://{acc_name.github.io}/{your_repository_name}/"
    ```

2. Open the `package.json` and change `homepage` property and (optional `name`)

    ```diff
    "name": "Your-project-name",
    - "homepage": "https://dibrovgleb.github.io/Vite-react-ts-ghpages-template/",
    + "homepage": "https://{acc_name.github.io}/{your_repository_name}/",
    ```

### Optional

1. `Readme.md` and `public/Readme.md`
    > in `public/` we have files that goes to gh-pages branch with bundle
    
    ```diff
    - # [Demo](https://dibrovgleb.github.io/Vite-react-ts-ghpages-template/)
    + # [Demo](https://{acc_name.github.io}/{your_repository_name}/)
    ```

2. `index.html`
    > `title` name `icon` link

3. `package-lock.json` `name` property 
    ```diff
    - "name": "Vite-react-ts-ghpages-template",
    + "name": "Your-project-name"
    ```

## How to publish

To publish project on `github-pages` run
  > Dont forget to change `{username}` and `{repo-name}`

```shell
git init
git remote add origin https://github.com/{username}/{repo-name}.git
npm run build
npm run deploy 
or npm run deploy -- -m "Your commit message"
```

1. Navigate to the **GitHub Pages** settings page
   1. In your web browser, navigate to the GitHub repository
   1. In your repository click on "Settings"
   1. In the sidebar click on "Pages"
1. Configure the "Build and deployment" settings like this: 
   1. **Source**: Deploy from a branch
   2. **Branch**: `gh-pages` Folder: `/ (root)`
1. Click on the "Save" button

**That's it!** The React app has been deployed to GitHub Pages! 🚀

### Optional

1. To store the React app's _source code_ on GitHub run next commands

    ```shell
    git add .
    git commit -m "Your commit message"
    git push origin master
    ```



### 📊 Statistics
![GitHub Repo stars](https://img.shields.io/github/stars/DibrovGleb/Vite-react-ts-ghpages-template)&nbsp;&nbsp; 
![GitHub watchers](https://img.shields.io/github/watchers/DibrovGleb/Vite-react-ts-ghpages-template)&nbsp;&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DibrovGleb/Vite-react-ts-ghpages-template?style=social)

