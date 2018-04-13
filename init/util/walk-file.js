/**
 * Created by Lucky on 2018/4/9.
 */
const fs = require('fs')

/**
 * ����Ŀ¼�µ��ļ�Ŀ¼
 * @param  {string} pathResolve  ����б�����Ŀ¼·��
 * @param  {string} mime         �����ļ��ĺ�׺��
 * @return {object}              ���ر������Ŀ¼���
 */
const walkFile = function(  pathResolve , mime ){

    let files = fs.readdirSync( pathResolve )

    let fileList = {}

    for( let [ i, item] of files.entries() ) {
        let itemArr = item.split('\.')

        let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : 'undefined'
        let keyName = item + ''
        if( mime === itemMime ) {
            fileList[ item ] =  pathResolve + item
        }
    }

    return fileList
}

module.exports = walkFile