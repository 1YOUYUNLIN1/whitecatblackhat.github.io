//�����¼�
window.onload = insertDateTime;
function insertDateTime()
{
    //ȷ��һ����ȫ�Ļ���
    if(!document.getElementById)    return;
    if(!document.createTextNode)    return;

    //�������ں�ʱ��
    
    var stamp= new Date().getTime() + 8 * 60 * 60 * 1000;
    var beijingTime = new Date(stamp).toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 19);

    //ȷ��Ŀ�ָ꣨��Ŀ��spanԪ�أ�
    var oTarget = document.getElementById('output');
    if(!oTarget)    return;

    //ɾ��ԭ�������ݣ���Ԫ�������е����ݣ�
    while(oTarget.firstChild)
    {
        oTarget.removeChild(oTarget.firstChild);
    }

    //�������ں�ʱ�䣨��Ԫ���в������ı���
    var oNewText = document.createTextNode(beijingTime);
    oTarget.appendChild(oNewText);
}