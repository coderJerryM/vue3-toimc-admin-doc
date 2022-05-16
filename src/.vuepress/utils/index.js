const path = require('path')
const fs = require('fs')
/**
 * dir, 项目路径
 * ops:参数
 * isRoot 是否根路径
 * root 根路径
 */
exports.genSliderBarConfig = (dir, { hasSub, exclude }, isRoot, root) => {
  const p = path.join(__dirname, '../../', dir)
  const files = fs.readdirSync(p)
  // 截取最后一个斜杠的位置
  const index = dir.lastIndexOf('/')
  // 截取最后一个斜杠后面的参数
  const after = dir.substring(index + 1, dir.length)
  const subDir = hasSub ? after : ''
  const arr = []
  files.forEach(item => {
    // console.log('item:', item)
    if (exclude.indexOf(item) !== -1) return
    // 提取出用  '.md' 隔开的path的最后一部分
    item = subDir
      ? subDir + '/' + path.basename(item, '.md')
      : path.basename(item, '.md')

    // 添加 '.md' 后缀
    item = item + '.md'
    // console.log('item2===>:', item)
    if (isRoot) item = root + item
    arr.push(item)
  })
  // 将默认 README.md 添加到数组的开头，并返回新的长度
  subDir
    ? isRoot
      ? arr.unshift(root + subDir + '/README.md')
      : arr.unshift(subDir + '/README.md')
    : arr.unshift('README.md')

  return arr
}

exports.resolve = docs => path.join(__dirname, '../../../', docs)
