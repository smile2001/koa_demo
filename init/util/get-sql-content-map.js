/**
 * Created by Lucky on 2018/4/9.
 */
const fs = require('fs')
const getSqlMap = require('./get-sql-map')

let sqlContentMap = {}

/**
 * ��ȡsql�ļ�����
 * @param  {string} fileName �ļ�����
 * @param  {string} path     �ļ����ڵ�·��
 * @return {string}          �ű��ļ�����
 */
function getSqlContent( fileName,  path ) {
    let content = fs.readFileSync( path, 'binary' )
    sqlContentMap[ fileName ] = content
}

/**
 * ��װ����sql�ļ��ű�����
 * @return {object}
 */
function getSqlContentMap () {
    let sqlMap = getSqlMap()
    for( let key in sqlMap ) {
        getSqlContent( key, sqlMap[key] )
    }

    return sqlContentMap
}

module.exports = getSqlContentMap