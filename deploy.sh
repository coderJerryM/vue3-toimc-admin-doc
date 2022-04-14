#!/bin/bash

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist/
# 初始化git
git init

# 配置git用户
git config user.name "toimc"
git config user.email "brian@toimc.com"

git add -A
git commit -m 'update commit'

# 部署到 github
git remote add github git@github.com:toimc-team/vue3-toimc-admin-doc.git
git push -f github master:gh-pages

cd -

# npm run upload
