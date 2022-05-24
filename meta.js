/**
 * File: meta.js
 * Created by busyhe on 2022/5/24 15:28.
 * Email: busyhe@qq.com
 * Description:
 */
module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A monorepo project',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
    },
    completeMessage: 'To get started:\n\n  cd {{name}} && yarn'
}
