/**
 * Created by Lucky on 2018/4/9.
 */
const fs = require('fs');
const getSqlContentMap = require('./util/get-sql-content-map');
const { query } = require('./util/db');


// ��ӡ�ű�ִ����־
const eventLog = function( err , sqlFile, index ) {
    if( err ) {
        console.log(`[ERROR] sql�ű��ļ�: ${sqlFile} ��${index + 1}���ű� ִ��ʧ�� o(�s���t)o ��`)
    } else {
        console.log(`[SUCCESS] sql�ű��ļ�: ${sqlFile} ��${index + 1}���ű� ִ�гɹ� O(��_��)O !`)
    }
}

// ��ȡ����sql�ű�����
let sqlContentMap = getSqlContentMap()

// ִ�н���sql�ű�
const createAllTables = async () => {
    for( let key in sqlContentMap ) {
        let sqlShell = sqlContentMap[key]
        let sqlShellList = sqlShell.split(';')

        for ( let [ i, shell ] of sqlShellList.entries() ) {
            if ( shell.trim() ) {
                let result = await query( shell )
                if ( result.serverStatus * 1 === 2 ) {
                    eventLog( null,  key, i)
                } else {
                    eventLog( true,  key, i)
                }
            }
        }
    }
    console.log('sql�ű�ִ�н�����')
    console.log('�밴 ctrl + c ���˳���')

}

createAllTables();